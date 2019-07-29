import React, { Component } from 'react';
import Book from './Book/Book';

class Books extends Component {
  render() {
    return (
      <div>
        {this.props.books.map(book => {
          return (
            <Book
              deleteHandler={this.props.deleteHandler}
              bookInputHandler={this.props.bookInputHandler}
              key={book.id}
              book={book}
            />
          );
        })}
      </div>
    );
  }
}

export default Books;
