import React from 'react'
import BookList from './BookList';

function Search(props) {

    const genres = ['All', ...props.genres];
    
    return (
    <div className='max-w-5xl mx-auto px-8 flex flex-col gap-4 '>
        <input type="text" placeholder='Search by author or title' value={props.searchQuery} onChange={props.onSearchChange} 
                className='-full max-w-xl border border-stone-300 rounded-sm px-4 py-2 text-md text-stone-700 placeholder-stone-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-stone-50' />

        <div>
            {genres.map(function(genre){
                return (
                    <button key={genre} onClick={() => {props.onGenreChange(genre);}} 
                            className={`text-sm font-semibold tracking-wide px-2 py-1 mx-2 rounded-sm border transition-colors ${props.selectedGenre === genre ? 'bg-orange-600 text-white border-orange-600' : 'bg-white text-stone-600 border-stone-300 hover:border-orange-500 hover:text-orange-600'}`}>
                        {genre}
                    </button>
                )
            })}
        </div>
    </div>
  )
}

export default Search