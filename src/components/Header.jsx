import React from 'react'

function Header() {
    return (
        <header className='border-b border-stone-200 bg-white'>
            <div className='max-w-5xl mx-auto px-8 py-5'>
                <h1 className='text-4xl font-bold text-stone-800 tracking-wide'>ReadList</h1>
                <p className='text-xs text-stone-400 tracking-widest'>Your Personal Library</p>
            </div>
        </header>
    )
}

export default Header