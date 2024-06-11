import React from 'react'
import { FiMenu, FiX } from 'react-icons/fi';

const MenuToggle = ({ isOpen, toggle }) => {
    return (
        <button onClick={toggle} className='z-20 p-2 text-2xl'>
            {isOpen ? <FiX /> : <FiMenu />}
        </button>
    )
}

export default MenuToggle