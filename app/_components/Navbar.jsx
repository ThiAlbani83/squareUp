'use client'

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { TbMenuDeep } from "react-icons/tb";
import Button from './Button';
import { motion } from 'framer-motion';

const menuVariants = {
    open: {
        x: 0,
        transition: {
            type: "inertia",
            velocity: 10,
            min: 100,
            max: 100,
            bounceStiffness: 40,
            bounceDamping: 15
        }
    },
    closed: {
        x: '-100%',
        transition: {
            type: "inertia",
            velocity: 10,
            min: 100,
            max: 100,
            bounceStiffness: 30,
            bounceDamping: 10
        }
    }
}


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
        if (!menuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }

    const handleDragEnd = (event, info) => {
        if (info.point.x < -window.innerWidth / 2) {
            setMenuOpen(false);
        }
    };


    return (
        <div className='px-[16px] py-[30px] lg:px-20 xl:px-40 flex items-center justify-between border-b border-b-gray15'>
            <div className='flex items-center gap-3'>
                <Image src={'/logo.jpg'} width={60} height={60} alt='logo' className='h-auto' />
                <span className='text-white text-xs lg:text-base xl:text-lg font-medium'>SquareUp</span>
            </div>
            <TbMenuDeep onClick={handleMenuOpen} className='bg-gray15 text-green80 w-[46px] h-[46px] text-xs p-1 rounded-md lg:hidden z-50' />
            {menuOpen && (
                <motion.div
                    initial="closed"
                    draggable='true'
                    animate={menuOpen ? "open" : "closed"}
                    variants={menuVariants}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.6}
                    onDragEnd={handleDragEnd}
                    className='w-full h-screen absolute top-0 left-0 bg-gray10 z-10'>
                    <ul className='flex flex-col w-full h-screen items-center justify-center lg:hidden gap-10 font-medium text-base text-gray90'>
                        <Link href={'/'} onClick={handleMenuOpen}><li>Home</li></Link>
                        <Link href={'/services'} onClick={handleMenuOpen}><li>Services</li></Link>
                        <Link href={'/works'} onClick={handleMenuOpen}><li>Work</li></Link>
                        <Link href={'/process'} onClick={handleMenuOpen}><li>Process</li></Link>
                        <Link href={'/about'} onClick={handleMenuOpen}><li>About</li></Link>
                        <Link href={'/carreers'} onClick={handleMenuOpen}><li>Careers</li></Link>
                        <Link href={"/contact"} onClick={handleMenuOpen}><li><Button primary={true} title={"Contact Us"} /></li></Link>
                    </ul>
                </motion.div>
            )}

            <ul className='hidden lg:flex gap-6 font-medium text-sm lg:text-base xl:text-lg text-gray90'>
                <Link href={'/'}><li>Home</li></Link>
                <Link href={'/services'}><li>Services</li></Link>
                <Link href={'/works'}><li>Work</li></Link>
                <Link href={'/process'}><li>Process</li></Link>
                <Link href={'/about'}><li>About</li></Link>
                <Link href={'/carreers'}><li>Careers</li></Link>
            </ul>
            <Link href={'/contact'} className='hidden lg:block px-[18px] py-3 bg-green50 text-gray15 rounded-md'><button>Contact Us</button></Link>
        </div >
    )
}

export default Navbar
