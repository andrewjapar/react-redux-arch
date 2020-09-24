import React from 'react'
import { FaUser, FaHome } from 'react-icons/fa';

export default [
    {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/',
        icon: <FaHome className="c-sidebar-nav-icon" />,
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Users',
        to: '/user',
        icon: <FaUser className="c-sidebar-nav-icon" />,
    }
]