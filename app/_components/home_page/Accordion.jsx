'use client'

import React, { useEffect, useState } from 'react'
import AccordionItem from './AccordionItem';

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const [visibleItems, setVisibleItems] = useState(8);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        const updateVisibleItems = () => {
            if (window.innerWidth <= 768) {
                setVisibleItems(4);
            } else {
                setVisibleItems(8);
            }
        };

        updateVisibleItems();
        window.addEventListener('resize', updateVisibleItems);
        return () => {
            window.removeEventListener('resize', updateVisibleItems);
        };
    }, []);
  
    return (
      <div className="w-full grid md:grid-cols-2">
         {items.slice(0, visibleItems).map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            icon={item.icon}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    );
  };

export default Accordion