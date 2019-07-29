import React, { Component } from 'react';

class Book extends Component {
  state = {
    isEditable: false
  };

  bookEditHandler = () => {
    this.setState({
      isEditable: true
    });
  };

  bookInputKeyHandler = e => {
    if (e.key === 'Enter') {
      this.setState({
        isEditable: false
      });
    }
  };

  render() {
    let editedBook = this.state.isEditable ? (
      <input
        onChange={e => {
          this.props.bookInputHandler(e.target.value, this.props.book.id);
        }}
        onKeyPress={this.bookInputKeyHandler}
        type="text"
        value={this.props.book.name}
      />
    ) : (
      <p>{this.props.book.name}</p>
    );

    return (
      <ul className="list-group my-2">
        <li className="list-group-item d-flex">
          {editedBook}

          <span className="ml-auto">{this.props.book.price}</span>

          <span
            onClick={this.bookEditHandler}
            className="mx-2"
            style={{ cursor: 'pointer' }}
          >
            <i className="fas fa-edit" />
          </span>

          <span
            className="mx-1"
            style={{ cursor: 'pointer' }}
            onClick={() => this.props.deleteHandler(this.props.book.id)}
          >
            <i className="fas fa-trash" />
          </span>
        </li>
      </ul>
    );
  }
}
export default Book;
