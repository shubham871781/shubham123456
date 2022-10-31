import React, { useState } from 'react';
import styled from 'styled-components';
import DoctorRegistration from '../../../../CommonComponent/Register/DoctorRegistration/DoctorRegistration';
import UserRegistration from '../../../../CommonComponent/Register/UserRegistration/UserRegistration';


const Tab = styled.button` 
  font-size: 1rem;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    box-shadow: 2px 7px #888888;
    background: #ddd1d1;
    border-bottom: 2px solid #876565;
    opacity: 1;
    border-radius:20px
    
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
    justify-content: end;
    margin-top : 20px
   
   
`;


const types = ['User Registration Form','Doctor Registration Form'];
function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
    <ButtonGroup>
      {types.map(type => (
        <Tab
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
        </Tab>
      ))}
    </ButtonGroup>
    <p />
    { active=='User Registration Form'? <UserRegistration/> : <DoctorRegistration/>}
  </>
);
}

<TabGroup/>



export default TabGroup