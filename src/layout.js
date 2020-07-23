import React from 'react'
import { useHistory } from 'react-router-dom'
import MenuIcon from './static/media/svg/MenuIcon.svg'
import CancelIcon from './static/media/svg/cancelMenu.svg'
import Logo from './static/media/svg/SkillsTree.svg'


const Nav = () => {
  const history = useHistory()
  const [isMenuTriggered, setMenuTriggered] = React.useState(false)
  console.log(isMenuTriggered)

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
                <div onClick={() => history.push(`/achievments`)}>Osiągnięcia</div>
                <div onClick={() => history.push(`/subscriptions`)}>Subskrypcje</div>
                <div onClick={() => history.push(`/partners`)}>Partnerzy</div>
                <div onClick={() => history.push(`/account`)}>Konto</div>
                <div onClick={() => history.push(`/logout`)}>Wyloguj</div>
              </div>
            </div>}
          </div>
          <div className={`logo${isMenuTriggered ? ' toggled' : ''}`} onClick={() => history.push(`/`)}>
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        <div className="rightSide">
          <div className="navLinks">
            <div onClick={() => history.push(`/achievments`)}>Osiągnięcia</div>
            <div onClick={() => history.push(`/subscriptions`)}>Subskrypcje</div>
            <div onClick={() => history.push(`/partners`)}>Partnerzy</div>
            <div onClick={() => history.push(`/account`)}>Konto</div>
            <div onClick={() => history.push(`/logout`)}>Wyloguj</div>
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
