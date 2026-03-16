import React from 'react'


function BookCard(props) {
  const book = props.book;

  return (
    <div className='border border-stone-300 rounded-lg p-8 flex flex-col gap-3 bg-white shadow-md'>
      <p className='font-bold uppercase text-md tracking-wide text-orange-600'>{book.genre}</p>

      <h3 className='text-xl font-bold text-stone-800 '>{book.title}</h3>
      <p className='text-md italic text-stone-600'>{book.tagline}</p>
      <p className='text-md font-semibold text-gray-700'>{book.author}</p>
      <p className='text-xs text-stone-600'>{book.year_published}</p>

      <div className='flex flex-wrap gap-2 pt-4 mt-auto border-t border-stone-200'>
          <p className='text-sm text-stone-600 bg-stone-200 px-3 py-2 rounded-full'>{book.pages} pages</p>
          <p className='text-sm text-stone-600 bg-stone-200 px-3 py-2 rounded-full'>Edition {book.edition}</p>
          <p className='text-sm text-stone-600 bg-stone-200 px-3 py-2 rounded-full'>ISBN: {book.ISBN13}</p>
      </div>

      <button onClick={function () { props.onDelete(book.ISBN13); }} className='mt-2 text-xs font-semibold text-stone-400 hover:text-red-500 transition-colors self-end px-2 py-1 border border-red-500 rounded-2xl'>
        Remove
      </button>

    </div>
  )
}

export default BookCard