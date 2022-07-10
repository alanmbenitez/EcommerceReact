import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  padding-right: 5%;
  display: flex;
  padding-left: 5%;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: #3D464D 
`


export const LogoContainer = styled(Link)`
  height: 100%;
  justify-content: center;
  width: 25%;
  align-items: center;
  display: flex;
  padding: 35px;
`

export const NavLinks = styled.div`
  max-width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex - end;
`
export const NavLink  = styled(Link)`
  padding: 10px 15px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
`

