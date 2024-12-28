// components/EditUser.js

import React, { useState, useEffect } from 'react';

const EditUser = ({ user, onUserUpdated, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });



  

  useEffect(() => {
    if (user) {
      setFormData({ name: user.name, email: user.email });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, ...formData };
    onUserUpdated(updatedUser); // Send updated user back to App.js
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update User</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default EditUser;
