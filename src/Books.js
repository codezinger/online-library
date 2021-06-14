const Books = ({books, handleFavClick}) => {
    return (
      <div className="books">
          <h3>Popular Books</h3>
          {books.map(book => (
                <div className="book-preview" key={book.id} >
                <h2>{ book.title }</h2>
                <img src={book.thumb} alt="" />
                <p>Written by { book.author }</p>
                <a className="btn" onClick={() => handleFavClick(book.id)}>Add to Favorites</a>
                <a href="" className="btn">Read</a>
              
                </div>
            ))}
      </div>
    );
  }
   
  export default Books;