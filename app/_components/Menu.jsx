import React from 'react'
import { motion } from 'framer-motion'

const menuVariants = {
    open: {
        x: 0,
        transition: {
            type: "spring",
            stiffness: 70,
            damping: 10
        }
    },
    closed: {
        x: '-100%',
        transition: {
            type: 'spring',
            stiffness: 70,
            damping: 10
        }
    }
}


const Menu = ({ isOpen, items }) => {
    return (
        <motion.nav
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={menuVariants}
            className='fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg z-10'
        >
            <ul className='p-4 space-y-4'>
                {items.map((item, index) => (
                    <li key={index} className='text-lg'>
                        {item}
                    </li>
                ))}
            </ul>

        </motion.nav>
    )
}

export default Menu