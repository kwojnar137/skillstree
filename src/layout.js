import React from 'react'
import { useHistory } from 'react-router-dom'
import MenuIcon from './static/media/svg/MenuIcon.svg'
import CancelIcon from './static/media/svg/cancelMenu.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const StyledLink = styled(Link)`
  color: rgba(0, 0, 0, 0.74);
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
  padding: 1rem;
  text-decoration:none;
`;

const Nav = () => {
  const history = useHistory()
  const [isMenuTriggered, setMenuTriggered] = React.useState(false)

  function toggleMenu() {
    setMenuTriggered(!isMenuTriggered)
  }

  return (
    <div className='navBar'>
      <div className="content">
        <div className="leftSide">
          <div className="menu" onClick={toggleMenu}>
            {isMenuTriggered ? <img src={CancelIcon} alt="Cancel Icon" /> : <img src={MenuIcon} alt="Menu Icon" />}
            {isMenuTriggered && <div className={`sideBar${isMenuTriggered ? ' active' : ''}`}>
              <div className='sideBarList'>
                <StyledLink to="/achievments">Osiągnięcia</StyledLink>
                <StyledLink to="/subscriptions">Subskrypcje</StyledLink>
                <StyledLink to="/partners">Partnerzy</StyledLink>
                <StyledLink to="/account">Konto</StyledLink>
                <StyledLink to="/logout">Wyloguj</StyledLink>
              </div>
            </div>}
          </div>
          <div className={`logo${isMenuTriggered ? ' toggled' : ''}`} onClick={() => history.push(`/`)}>
            <h1>SkillsTree.pl</h1>
          </div>
        </div>
        <div className="rightSide">
          <div className="navLinks">
            <StyledLink to="/achievments">Osiągnięcia</StyledLink>
            <StyledLink to="/subscriptions">Subskrypcje</StyledLink>
            <StyledLink to="/partners">Partnerzy</StyledLink>
            <StyledLink to="/account">Konto</StyledLink>
            <StyledLink to="/logout">Wyloguj</StyledLink>
          </div>
        </div>
      </div>
    </div>
  )
}


export default function layout({ children }) {
  return (
    <div className='mainContainer'>
      <Nav />
      <div className='contentContainer'>
        {children}
      </div>
      <div className='footer'>
        {/* {footer} */}
      </div>
    </div>
  )
}
