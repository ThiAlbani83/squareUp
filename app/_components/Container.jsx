import React from 'react'

function Container({ children }) {
    return (
        <div className='lg:mx-20 xl:mx-40 border-x mx-4 border border-gray15'>
            {children}
        </div>
    )
}

export default Container