server {
    if ($host = www.ebookkeepings.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = ebookkeepings.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    listen [::]:80;
    server_name ebookkeepings.com www.ebookkeepings.com;
    
    # Force HTTPS
    return 301 https://$server_name$request_uri;




}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name ebookkeepings.com www.ebookkeepings.com;
    
    root /var/www/ebookkeepings.com;
    index index.php index.html index.htm;

    # SSL Configuration - Use Certbot generated paths
    ssl_certificate /etc/letsencrypt/live/ebookkeepings.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/ebookkeepings.com/privkey.pem; # managed by Certbot
    
    # Modern SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-CHACHA20-POLY1305;
    ssl_prefer_server_ciphers off;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    # Main location block
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    # PHP handling
    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
        
        # Security
        fastcgi_hide_header X-Powered-By;
    }

    # Deny access to sensitive files
    location ~ /\.(ht|git|svn) {
        deny all;
    }
    
    location ~ /\.ht {
        deny all;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }




}
server {
    listen 80;
    server_name staging.ebookkeepings.com 64.227.111.184;

    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:5000/api/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
