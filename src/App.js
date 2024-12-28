import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import styled from 'styled-components';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    // Fetch users initially when the component mounts
    axios.get("http://localhost:3000/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleUserAdded = (user) => setUsers((prevUsers) => [...prevUsers, user]);

  const handleUserUpdated = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setEditingUser(null);
  };

  const handleDeleteUser = (id) => {
    console.log('Deleting user with id:', id);
    axios.delete(`http://localhost:3000/users/${id}`)
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id)); // Updated state correctly
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <Container>
      <Title>CRUD App</Title>
      {editingUser ? (
        <EditUser
          user={editingUser}
          onUserUpdated={handleUserUpdated}
          onCancel={() => setEditingUser(null)}
        />
      ) : (
        <AddUser onUserAdded={handleUserAdded} />
      )}
      <UserList
        users={users}
        onEdit={(user) => setEditingUser(user)}
        onDelete={handleDeleteUser} // Passing onDelete handler here
      />
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

export default App;
