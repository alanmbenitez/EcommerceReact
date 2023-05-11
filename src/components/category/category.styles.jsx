import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  transition: transform 0.8s ease-in-out;
`

export const Body = styled.div`
  height: 0;
  width: 100%;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  position: absolute;
  bottom: 0;
  transition: all 0.5s ease-in-out;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #ffffff;
    text-transform: uppercase;
    font-family: 'Arial', sans-serif;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
    color: #ffffff;
    font-family: 'Arial', sans-serif;
  }
`

export const DirectoryItemContainer = styled(Link)`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  margin: 0 7.5px 15px;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  
  &:hover {
    cursor: pointer;
  
    & ${BackgroundImage} {
      transform: scale(1.1);
    }
  
    & ${Body} {
      height: 50%;
      opacity: 0.85;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }
  
  &:last-child {
    margin-left: 7.5px;
  }
`
