
import React from 'react'
import './Navbar.css'
import NavbarItem from './navbar/NavbarItem'
import { ReactNode } from 'react'

const navbarElements = [
    {label: 'Home', href: './home'},
    {label: 'Projects', href: './projects'},
    {label: 'Contacs', href: './contacts'},
    {label: 'Blog', href: './blog'},
    {label: 'Others', href: './'},
]

type NavbarProps = {
    children?: ReactNode;
}


function Navbar (props: NavbarProps) {

    // Render
    return (
        <nav className="navbar">
            <ul className='navbar-list'>
                {navbarElements.map(element =>{
                    return(
                       <NavbarItem 
                            key={element.href} 
                            href={element.href} 
                            label={element.label}
                        />
                    )
                })}

            </ul>
            {props.children}
        </nav>
    )
}

export default Navbar;