import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

const AccordionItem = ({ title, icon, content, isOpen, onClick }) => {
    return (
        <div className="border-x border-x-gray15">
            <div className="flex items-center gap-2 p-[15px] cursor-pointer" onClick={onClick}>
                <Image src={icon} width={50} height={52} alt={icon} />
                <h3 className={isOpen ? 'text-green80 text-base lg:text-[18px]' : 'text-white text-base lg:text-[18px]'}>{title}</h3>
            </div>
            <motion.div
                className="overflow-hidden p-[15px]"
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.5 }}
            >
                {isOpen && <div className='text-gray90 text-[14px] md:text-base leading-[150%] max-w-[350px] md:max-w-[450px] lg:max-w-[500px]'>{content}</div>}
            </motion.div>
            <div className='border-b border-b-gray15' />
        </div>
    );
};

export default AccordionItem