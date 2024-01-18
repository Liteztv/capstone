import React, { useState } from 'react';

function GiveReviews() {
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleStarClick = (selectedRating) => {
    setFormData({
      ...formData,
      rating: selectedRating,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(formData);
    setFormData('');
    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false);
      // Assuming there is a callback function from ReviewForm to update the reviewGiven status
      // Pass the doctor's ID to updateReviewGiven
      updateReviewGivenInParent(/* Pass the doctor's ID here */);
    } else {
      setShowWarning(true);
    }
  };

  // Dummy function to be replaced with the actual callback
  const updateReviewGivenInParent = (doctorId) => {
    console.log(`Updating reviewGiven for doctor with ID ${doctorId}`);
  };

  return (
    <div className='container'>
      {!showForm ? (
        <button onClick={handleButtonClick}>Open Form</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Give Your Feedback</h2>
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="rating">Rating:</label>
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} onClick={() => handleStarClick(star)}>
                {star <= formData.rating ? '★' : '☆'}
              </span>
            ))}
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
      {submittedMessage && (
        <div>
          <h3>Submitted Message:</h3>
          <p>Name: {submittedMessage.name}</p>
          <p>Review: {submittedMessage.review}</p>
          <p>Rating: {submittedMessage.rating}</p>
        </div>
      )}
    </div>
  );
}

export default GiveReviews;

