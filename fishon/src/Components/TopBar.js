import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RegistrationForm from "./RegistrationForm";
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const StyledTopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: green;
  z-index: 1000000;
`;
const TopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: whitesmoke;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
  span {
    cursor: pointer;
    margin-right: 5%;
  }
  span:last-child {
    margin-right: 0;
  }
  span:hover {
    text-decoration: underline;
  }
`;

const ContainerRight = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  @media (min-width: 1280px) {
    width: 1280px;
  }
  span {
    cursor: pointer;
  }
`;

const InputForm = styled.div`
  border: 1px solid gray;
  margin: 15px;
  padding: 5px;
  margin-right: 52%;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
function TopBar() {
  return (
    <Router>
      
    <StyledTopBar>
      <TopBarContainer>
        <ContainerCenter>
          <InputForm>
          <span><Link to="RegistrationForm">Create Account</Link></span>
          </InputForm>

          <span>Zone Regs</span>
          <span>Lures</span>
          <span>Fish Population</span>
          <span>Maps</span>
        </ContainerCenter>
        <ContainerRight>
          <span type='submit'>LOG IN</span>
         
        </ContainerRight>
      </TopBarContainer>
    </StyledTopBar>
    
    </Router>
  );
}

export default TopBar;
