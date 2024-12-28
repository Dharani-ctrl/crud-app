import React, { useState } from 'react';
import { deleteUser } from '../api'; // Import the deleteUser function from api.js

const DeleteUser = ({ userId, onUserDeleted, onCancel }) => {
  const [isDeleting, setIsDeleting] = useState(false); // State to track deletion status

  const handleDelete = async () => {
    setIsDeleting(true); // Set deleting status to true
    try {
      await deleteUser(userId); // Call the deleteUser function from api.js
      onUserDeleted(userId); // Notify parent component that the user was deleted
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setIsDeleting(false); // Set deleting status back to false
    }
  };

  return (
    <div>
      <h3>Are you sure you want to delete this user?</h3>
      <button onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? "Deleting..." : "Yes, Delete"}
      </button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default DeleteUser;
