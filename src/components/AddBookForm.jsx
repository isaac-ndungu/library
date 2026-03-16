import React, { useState } from 'react'
import {BookLibrary } from './BookList';

function AddBookForm(props) {
    const [book, setBook] = useState({
        title: '',
        tagline: '',
        author: '',
        year_published: '',
        edition: '',
        ISBN13: '',
        pages: '',
        genre: '',
    });

    const genres = [];

    BookLibrary.forEach(function (book) {
        if (!genres.includes(book.genre)) {
            genres.push(book.genre);
        }
    });

    function handleChange(event) {
        const field = event.target.name;
        const value = event.target.value;

        setBook(function (previousBook) {
            const updatedBook = { ...previousBook };
            updatedBook[field] = value;
            return updatedBook;
        });
    }

    function handleSubmit() {
        if (!book.title.trim() || !book.author.trim()) return;

        props.onAdd({
            ...book,
            year_published: Number(book.year_published),
            edition: Number(book.edition),
            pages: Number(book.pages),
        });

        // Reset form
        setBook({
            title: '',
            tagline: '',
            author: '',
            year_published: '',
            edition: '',
            ISBN13: '',
            pages: '',
            genre: ''
        });
    }
    return (
        <div className='max-w-5xl mx-auto px-8 mb-8 mt-3'>
            <div className='border border-stone-200 rounded-sm p-6 bg-white flex flex-col gap-4'>

                <h2 className='text-sm font-bold uppercase tracking-widest text-stone-400'>Add a Book</h2>

                {/* Title and Tagline */}
                <div className='flex gap-4'>
                    <input
                        type='text'
                        name='title'
                        placeholder='Title'
                        value={book.title}
                        onChange={handleChange}
                        className={`flex-1 border border-stone-300 rounded-sm px-4 py-2 text-sm text-stone-700 placeholder-stone-400 focus:outline-none focus:border-orange-500 bg-stone-50`}
                    />
                    <input
                        type='text'
                        name='tagline'
                        placeholder='Tagline'
                        value={book.tagline}
                        onChange={handleChange}
                        className={`flex-1 border border-stone-300 rounded-sm px-4 py-2 text-sm text-stone-700 placeholder-stone-400 focus:outline-none focus:border-orange-500 bg-stone-50`}
                    />
                </div>

                {/* Author and Genre */}
                <div className='flex gap-4'>
                    <input
                        type='text'
                        name='author'
                        placeholder='Author'
                        value={book.author}
                        onChange={handleChange}
                        className={`flex-1 border border-stone-300 rounded-sm px-4 py-2 text-sm text-stone-700 placeholder-stone-400 focus:outline-none focus:border-orange-500 bg-stone-50`}
                    />
                    <select
                        name='genre'
                        value={book.genre}
                        onChange={handleChange}
                        className={`flex-1 border border-stone-300 rounded-sm px-4 py-2 text-sm text-stone-700 placeholder-stone-400 focus:outline-none focus:border-orange-500 bg-stone-50`}
                    >
                        <option value=''>Select Genre</option>
                        {genres.map(function (genre) {
                            return <option key={genre} value={genre}>{genre}</option>;
                        })}
                    </select>
                </div>

                {/* Year, Edition, Pages, ISBN */}
                <div className='flex gap-4'>
                    <input
                        type='number'
                        name='year_published'
                        placeholder='Year Published'
                        value={book.year_published}
                        onChange={handleChange}
                        className={`flex-1 border border-stone-300 rounded-sm px-4 py-2 text-sm text-stone-700 placeholder-stone-400 focus:outline-none focus:border-orange-500 bg-stone-50`}
                    />
                    <input
                        type='number'
                        name='edition'
                        placeholder='Edition'
                        value={book.edition}
                        onChange={handleChange}
                        className={`flex-1 border border-stone-300 rounded-sm px-4 py-2 text-sm text-stone-700 placeholder-stone-400 focus:outline-none focus:border-orange-500 bg-stone-50`}
                    />
                    <input
                        type='number'
                        name='pages'
                        placeholder='Pages'
                        value={book.pages}
                        onChange={handleChange}
                        className={`flex-1 border border-stone-300 rounded-sm px-4 py-2 text-sm text-stone-700 placeholder-stone-400 focus:outline-none focus:border-orange-500 bg-stone-50`}
                    />
                    <input
                        type='text'
                        name='ISBN13'
                        placeholder='ISBN13'
                        value={book.ISBN13}
                        onChange={handleChange}
                        className={`flex-1 border border-stone-300 rounded-sm px-4 py-2 text-sm text-stone-700 placeholder-stone-400 focus:outline-none focus:border-orange-500 bg-stone-50`}
                    />
                </div>

                {/* Actions */}
                <div className='flex gap-4'>
                    <button
                        onClick={handleSubmit}
                        className='bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold tracking-wide px-6 py-2 rounded-sm transition-colors'
                    >
                        Add Book
                    </button>
                    <button
                        onClick={props.onCancel}
                        className='border border-stone-300 text-stone-500 hover:text-red-500 hover:border-red-400 text-sm font-bold tracking-wide px-6 py-2 rounded-sm transition-colors'
                    >
                        Cancel
                    </button>
                </div>

            </div>
        </div>
    )
}

export default AddBookForm