import React from 'react';

const BookkeeperCard = ({ bookkeeper }) => {
  const {
    fullName,
    companyName,
    companyAddress,
    email,
    phone,
    preferredContact
  } = bookkeeper;

  const renderContactInfo = () => {
    if (preferredContact === 'email' && email) {
      return (
        <div className="contact-info">
          <div className="contact-label">Preferred Contact</div>
          <a href={`mailto:${email}`} className="contact-link email-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2"/>
            </svg>
            {email}
          </a>
        </div>
      );
    }

    if (preferredContact === 'phone' && phone) {
      return (
        <div className="contact-info">
          <div className="contact-label">Preferred Contact</div>
          <a href={`tel:${phone}`} className="contact-link phone-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92V19.92C22 20.52 21.39 21 20.68 21C16.09 21 8.03 13.94 3 8.32C2.48 7.61 3 7 3.8 7H6.8C7.33 7 7.8 6.66 7.94 6.12C8.53 3.94 9.63 2 11 2C11.33 2 11.67 2.32 11.67 2.8V5.3C11.67 5.68 12.04 6.06 12.41 6.06C13.84 6.06 15.25 6.5 16.45 7.3C16.78 7.54 17.25 7.45 17.45 7.11L18.67 5.14C18.88 4.8 18.78 4.3 18.45 4.06C16.36 2.45 13.83 1.5 11.17 1.5C10.45 1.5 9.83 2.06 9.83 2.8V4.3C8.21 4.3 6.67 4.84 5.4 5.78C4.14 6.72 3.22 8.06 2.78 9.58C5.82 14.06 12.06 19.5 18.33 19.5C19.06 19.5 19.67 18.95 19.67 18.21V16.91C19.67 16.53 20.04 16.15 20.41 16.15C21.84 16.15 22.67 16.53 22.67 16.92Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
            {phone}
          </a>
        </div>
      );
    }

    // Fallback if no preferred contact is set
    return (
      <div className="contact-info">
        <div className="contact-label">Contact Information</div>
        <div className="contact-fallback">
          Please contact for more information
        </div>
      </div>
    );
  };

  return (
    <div className="bookkeeper-card">
      <div className="card-header">
        <div className="avatar">
          {fullName ? fullName.charAt(0).toUpperCase() : 'B'}
        </div>
        <div className="name-section">
          <h3 className="full-name">{fullName || 'Bookkeeper'}</h3>
          {companyName && (
            <p className="company-name">{companyName}</p>
          )}
        </div>
      </div>

      <div className="card-body">
        {companyAddress && (
          <div className="info-row">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39543 13.1046 8.5 12 8.5C10.8954 8.5 10 9.39543 10 10.5C10 11.6046 10.8954 12.5 12 12.5Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 21C12 21 20 16 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 16 12 21 12 21Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="company-address">{companyAddress}</span>
          </div>
        )}
        
        {renderContactInfo()}
      </div>

      <div className="card-footer">
        <span className="contact-badge">
          {preferredContact === 'email' ? 'Email Preferred' : 'Phone Preferred'}
        </span>
      </div>

      <style jsx>{`
        .bookkeeper-card {
          background: var(--white);
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .bookkeeper-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .card-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent) 0%, #4a9c7a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          font-weight: bold;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .name-section {
          flex: 1;
        }

        .full-name {
          color: var(--primary);
          margin: 0 0 0.25rem 0;
          font-size: 1.3rem;
          font-weight: 600;
        }

        .company-name {
          color: var(--accent);
          margin: 0;
          font-weight: 500;
          font-size: 1rem;
        }

        .card-body {
          flex: 1;
          margin-bottom: 1.5rem;
        }

        .info-row {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: var(--gray);
        }

        .info-row svg {
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        .company-address {
          line-height: 1.4;
        }

        .contact-info {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--light-gray);
        }

        .contact-label {
          font-size: 0.85rem;
          color: var(--gray);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: var(--light-bg);
          border-radius: 8px;
          text-decoration: none;
          color: var(--primary);
          font-weight: 500;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .contact-link:hover {
          background: var(--accent);
          color: var(--white);
          transform: translateY(-1px);
        }

        .email-link:hover {
          box-shadow: 0 4px 12px rgba(98, 181, 143, 0.3);
        }

        .phone-link:hover {
          box-shadow: 0 4px 12px rgba(55, 51, 52, 0.3);
        }

        .contact-fallback {
          color: var(--gray);
          font-style: italic;
          padding: 0.5rem 0;
        }

        .card-footer {
          margin-top: auto;
        }

        .contact-badge {
          display: inline-block;
          padding: 0.35rem 0.75rem;
          background: var(--light-bg);
          color: var(--primary);
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .bookkeeper-card {
            padding: 1.25rem;
          }

          .card-header {
            gap: 0.75rem;
          }

          .avatar {
            width: 45px;
            height: 45px;
            font-size: 1.1rem;
          }

          .full-name {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default BookkeeperCard;