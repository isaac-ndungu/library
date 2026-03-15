import React from 'react'


function BookCard(props) {
  const book = props.book;

  return (
    <div className='border-1 rounded-sm p-8 flex flex-col gap-4'>
      <p className='font-bold uppercase mb-4'>{book.genre}</p>

      <h3>{book.title}</h3>
      <p>{book.tagline}</p>
      <p>{book.author}</p>
      <p>{book.year_published}</p>

      <div>
        <p>{book.pages} pages</p>
        <p>Edition {book.edition}</p>
        <p>ISBN: {book.ISBN13}</p>
      </div>

    </div>
  )
}

export default BookCard