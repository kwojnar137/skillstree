import React from 'react'
import MenuIcon from './static/media/svg/MenuIcon.svg'
import CancelIcon from './static/media/svg/cancelMenu.svg'
import Link from './components/Link'


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
                <Link to="/courses">Kursy</Link>
                <Link to="/shop">Sklep</Link>
              </div>
            </div>}
          </div>
          <div className={`logo${isMenuTriggered ? ' toggled' : ''}`}>
            <Link to="/"><h1>SkillsTree.pl</h1></Link>
          </div>
        </div>
        <div className="rightSide">
          <div className="navLinks">
            <Link to="/courses">Kursy</Link>
            <Link to="/shop">Sklep</Link>

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
