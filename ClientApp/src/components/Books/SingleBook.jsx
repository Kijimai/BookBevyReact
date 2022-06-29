import axios from "axios"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
const SingleBook = () => {
  const [currentBook, setCurrentBook] = useState({})
  const { bookId } = useParams()

  const fetchBook = async (id) => {
    await axios(`https://www.googleapis.com/books/v1/volumes?q=${id}`)
      .then((res) => {
        console.log(res.data.items[0])
        setCurrentBook(res.data.items[0])
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchBook(bookId)
  }, [])

  return <div className="container">
    
  </div>
}

export default SingleBook
