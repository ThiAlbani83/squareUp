import React, { useState } from 'react';
import MenuToggle from './MenuToggle';
import Menu from './Menu';

const MobileMenu = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <MenuToggle isOpen={isOpen} toggle={toggleMenu} />
            <Menu isOpen={isOpen} items={items} />
            {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-0" onClick={toggleMenu}></div>}
        </div>
    );
};

export default MobileMenu;