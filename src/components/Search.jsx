import React from 'react'

function Search(props) {

    const genres = ['All', ...props.genres];
    
    return (
    <div className='max-w-5xl mx-auto px-8 flex flex-col gap-4 items-center'>
        <div className='flex gap-4 w-full max-w-xl'>
            <input type="text" placeholder='Search by author or title' value={props.searchQuery} onChange={props.onSearchChange}
                    className='w-full max-w-xl flex-1 border border-stone-300 rounded-sm px-4 py-2 text-md text-stone-700 placeholder-stone-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-stone-50' />
            
            <button onClick={props.onToggleForm} className=' bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold tracking-wide px-6 py-2 rounded-sm transition-colors'>
                <i className="fa-solid fa-plus mr-1"></i>Add Book
            </button>
        </div>

        {/* Filter Buttons */}
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