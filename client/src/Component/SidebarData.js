import React from 'react'
import * as AiIcons from 'react-icons/ai';


export const SidebarData = [
    {
        title : 'Home',
        path : '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title : 'About Us',
        path : '/aboutus',
        icon: <AiIcons. AiFillMessage/>,
        cName: 'nav-text'
    },
    {
        title : 'Contact Us',
        path : '/contactus',
        icon: <AiIcons.AiFillContacts/>,
        cName: 'nav-text'
    },
    {
        title : 'Login',
        path: '/login',
        icon: <AiIcons.AiOutlineLogin/>,
        cName: 'nav-text'
    }
]