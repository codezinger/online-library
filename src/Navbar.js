const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Library</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/books">Books</a>
            <a href="/favbooks">Favorite Books</a>
            <a href="/about">About Us</a>
            
        </div>
      </nav>
    );
  }
   
  export default Navbar;