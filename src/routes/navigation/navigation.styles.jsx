import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavigationContainer = styled.div`
  height: 80px;
  width: 100%;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1F2833;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.1);
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease-in-out;

  .logo {
    height: 60%;
    padding: 0px 10px;
  }

  &:hover {
    transform: scale(1.05);
  }
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  padding: 0px 15px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  position: relative;
  
  &:hover {
    color: #DEBA24;

    &::after {
      width: 100%;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #DEBA24;
    transition: all 0.3s ease-in-out;
  }
`
