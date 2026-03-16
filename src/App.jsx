import React from 'react'
import BookList from './components/BookList'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className='min-h-screen bg-stone-50'>
      <Header />
      <BookList />
      <Footer />
    </div>
  )
}

export default App