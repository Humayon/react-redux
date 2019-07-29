import React, { Component } from 'react';
import Books from './Books/Books';

class App extends Component {
  state = {
    books: [
      { id: 1, name: 'JS', price: 33 },
      { id: 2, name: 'React', price: 25 },
      { id: 3, name: 'React Native', price: 55 }
    ]
  };

  deleteHandler = id => {
    let newBooks = this.state.books.filter(book => book.id !== id);
    this.setState({
      books: newBooks
    });
  };

  bookInputHandler = (name, id) => {
    let newBooks = this.state.books.map(book => {
      if (book.id === id) {
        return {
          ...book,
          name
        };
      }
      return book;
    });

    this.setState({
      books: newBooks
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Books
              deleteHandler={this.deleteHandler}
              bookInputHandler={this.bookInputHandler}
              books={this.state.books}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
