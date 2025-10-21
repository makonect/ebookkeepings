import React from 'react';

const BookkeeperCard = ({ bookkeeper }) => {
  return (
    <div className="bookkeeper-card">
      <h3>{bookkeeper.fullName}</h3>
      {bookkeeper.companyName && (
        <p className="company-name"><strong>Company:</strong> {bookkeeper.companyName}</p>
      )}
      <p><strong>Email:</strong> {bookkeeper.email}</p>
      <p><strong>Phone:</strong> {bookkeeper.phone}</p>
      <p><strong>Address:</strong> {bookkeeper.address}, {bookkeeper.zipCode}</p>
      {bookkeeper.companyAddress && (
        <p><strong>Company Address:</strong> {bookkeeper.companyAddress}</p>
      )}
      <p className="preferred-contact">
        <strong>Preferred Contact:</strong> {bookkeeper.preferredContact}
      </p>
    </div>
  );
};

export default BookkeeperCard;