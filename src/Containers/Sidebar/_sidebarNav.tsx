import React from 'react'
import { AiOutlineDashboard, AiOutlineShop, AiOutlineShoppingCart, AiOutlineSkin, AiOutlineUser, AiOutlineWallet } from 'react-icons/ai';

export default [
    {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: <AiOutlineDashboard className="c-sidebar-nav-icon" />,
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Product',
        to: '/product',
        icon: <AiOutlineSkin className="c-sidebar-nav-icon" />,
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Stock Control',
        to: '/stock-control',
        icon: <AiOutlineShoppingCart className="c-sidebar-nav-icon" />,
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Sales Order',
        to: '/sales-order',
        icon: <AiOutlineWallet className="c-sidebar-nav-icon" />,
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Store Location',
        to: '/store-location',
        icon: <AiOutlineShop className="c-sidebar-nav-icon" />,
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Users',
        to: '/user',
        icon: <AiOutlineUser className="c-sidebar-nav-icon" />,
    },
]