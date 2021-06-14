const Favbooks = () => {

    const handleRemoveBk = (title) => {
        localStorage.removeItem(title)
    }
    const fbooks = {...localStorage}
    const bks = []
    for(let book in fbooks){
        bks.push(JSON.parse(fbooks[book])[0])
    }
    console.log(bks)
    return ( 
        <div className="favbooks">
            <h3>Favorite Books</h3>
            {bks.map(book => (
                <div className="book-preview" key={book.id} >
                <h2>{ book.title }</h2>
                <img src={book.thumb} alt="" />
                <p>Written by { book.author }</p>
                <a href="" onClick={() => handleRemoveBk(book.title)} className="btn">Remove</a>
                <a href="" className="btn">Read</a>
              
                </div>
            ))}
        </div>
     );
}
 
export default Favbooks;