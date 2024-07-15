//Here's a basic registration form built with React and Javascript, similar to the login form example:

//JavaScript
import React, { useState } from 'react';
import styled from "styled-components";

const InputForm = styled.div`
  border: 1px solid grey;
  margin: 25px;
  width: 100%;
  padding: 5px;
  margin-right: 52%;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
const Input = styled.input`
  padding: 5px;
  margin: 0.5em;
  width: 95%;
  color: black;
  background: white;
  border: none;
  border-radius: 3px;
   @media (min-width: 1280px) {
    width: 1280px;
  }
`;
const StyledButton = styled.div`

  margin: 25px;
  width: 100%;
  padding: 5px;
  margin-right: 52%;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple validation (replace with more thorough validation)
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Simulate registration logic (replace with your backend logic)
    console.log('Registration successful!', { name, email });
    // Handle successful registration (e.g., redirect, confirmation message)
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm>
      
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <Input  
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      </InputForm>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <StyledButton>
      <button type="submit">Register</button>
      </StyledButton>
    </form>
  );
}

export default RegistrationForm;