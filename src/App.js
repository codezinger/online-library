import './App.css';
import { useState } from "react";
import Navbar from './Navbar';
import Books from './Books';
import About from './About';
import Favbooks from './Favbooks';
import Home from './Home';
import Lifetime from './lifetime.jpg';
import Secret from './secret.jpg';
import Think from './think.jpg';
import Jakes from './jakes.jpg';
import Meyer from './meyer.jpg';
import Gifted from './gifted.jpg';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  const [books, setBooks] = useState([
    {id: 1, thumb: Lifetime, title:'A lifetime of Riches', author:'Napoleon Hill'},
    {id: 2, thumb: Think, title:'Think and Grow Rich', author:'Napoleon Hill'},
    {id: 3, thumb: Secret, title:'The Strangest Secret', author:'Earl Nightingale'},
    {id: 4, thumb: Jakes, title:'Soar', author:'T.D Jakes'},
    {id: 5, thumb: Meyer, title:'Life of Love', author:'Joyce Meyer'},
    {id: 6, thumb: Gifted, title:'Gifted Hands', author:'Ben Carsons'},

   
  ])


  const handleFavClick = (id) => {
    let favbook = books.filter(book=>book.id == id)
    // favbooks.push(favbook)
    // console.log(favbook[0])

    localStorage.setItem(favbook[0].title,JSON.stringify(favbook))

    
    // console.log(fbooks)
  }
  


  return (
    <Router>
    <div className="App">
      <Navbar />
      
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/books">
            <Books books={books} handleFavClick={handleFavClick}/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/favbooks">
            <Favbooks />
          </Route>
         
        </Switch>
      </div>
      
    </div>
    </Router>
  );
}

export default App;
