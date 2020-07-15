import React from 'react'

export const Nav = () => {
    return (
        <div className='navBar'>

        </div>
    )
}


export default function layout({ children }) {
    return (
        <div className='mainContainer'>
            {Nav}
            <div className='contentContainer'>
                {children}
            </div>
            <div className='footer'>
                {/* {footer} */}
            </div>
        </div>
    )
}
