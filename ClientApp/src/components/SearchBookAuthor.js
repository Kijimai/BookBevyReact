import React, { useState, useEffect } from "react"
import axios from "axios"

const SearchBookAuthor = () => {
  const [foundBooks, setFoundBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [bookTitle, setBookTitle] = useState("")
  const [bookAuthor, setBookAuthor] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    await axios(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${bookTitle}`
    )
      .then(({ data }) => {
        console.log(data.items)
        setFoundBooks(data.items)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Search for a book</h2>
        <div className="mb-4">
          <label htmlFor="bookTitle">Title</label>
          <input
            id="bookTitle"
            onChange={(e) => setBookTitle(e.target.value)}
            type="text"
            className="d-block"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bookAuthor">Author</label>
          <input
            id="bookAuthor"
            onChange={(e) => setBookAuthor(e.target.value)}
            type="text"
            className="d-block"
          />
        </div>
        <button>Search</button>
      </form>
      <div
        className="container d-grid gap-2 py-4"
        style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
      >
        {!isLoading &&
          foundBooks.map((book, index) => {
            let currentImage = book.volumeInfo.imageLinks.smallThumbnail && (
              <img
                className="card-img-top"
                src={book.volumeInfo.imageLinks.smallThumbnail}
                alt={book.title}
              />
            )

            return (
              <div key={index} className="card">
                {currentImage}
                <div className="card-body">
                  <h4 className="card-title">{book.volumeInfo.title}</h4>
                  <p>
                    {book.volumeInfo.description
                      ? book.volumeInfo.description.substring(0, 100) + "..."
                      : "No Description"}
                  </p>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default SearchBookAuthor
