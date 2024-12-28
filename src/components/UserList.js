import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  const listStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const listItemStyle = {
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    marginLeft: '10px',
    padding: '5px 10px',
    backgroundColor: '#ff5c5c',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div>
      <h2>User List</h2>
      <ul style={listStyle}>
        {users.map((user) => (
          <li key={user.id} style={listItemStyle}>
            <span>{user.name} - {user.email}</span>
            <div>
              <button onClick={() => onEdit(user)} style={buttonStyle}>Edit</button>
              {/* The delete button calls the onDelete function with the user's id */}
              <button onClick={() => onDelete(user.id)} style={buttonStyle}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
