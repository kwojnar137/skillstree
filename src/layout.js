import React from 'react'
import { useHistory } from 'react-router-dom'
import MenuIcon from './static/media/svg/MenuIcon.svg'
import CancelIcon from './static/media/svg/cancelMenu.svg'
import StyledLink from './components/StyledLink'





const Nav = () => {
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
                <StyledLink to="/courses">Kursy</StyledLink>
              </div>
            </div>}
          </div>
          <div className={`logo${isMenuTriggered ? ' toggled' : ''}`}>
            <StyledLink to="/"><h1>SkillsTree.pl</h1></StyledLink>
          </div>
        </div>
        <div className="rightSide">
          <div className="navLinks">
            <StyledLink to="/courses">Kursy</StyledLink>
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
