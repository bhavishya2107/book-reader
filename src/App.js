import React, { Component } from "react";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import { Switch, Route, withRouter } from "react-router-dom";
import BookDetails from "./components/BookDetails";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    let books = JSON.parse(localStorage.getItem("books")) || [];
    this.state = {
      books,
      currentBook: null,
      search: "",
    };
  }

  addBook = (book) => {
    this.setState(
      {
        books: this.state.books.concat(book),
      },
      () => localStorage.setItem("books", JSON.stringify(this.state.books))
    );
  };

  getSingleBook = (currentBook) => {
    this.setState({
      currentBook,
    });
  };

  deleteBook = (id) => {
    this.setState({
      books: this.state.books.filter((book) => book.id !== id),
    });
  };

  searchBooks = (searchQuery) => {
    this.setState({
      search: searchQuery,
    });
  };

  render() {
    let books = this.state.search
      ? this.state.books.filter((book) =>
          book.title.toLowerCase().includes(this.state.search.toLowerCase())
        )
      : this.state.books;
    let booksByCategory = books.reduce((acc, book) => {
      acc[book["category"]] = acc[book["category"]] || [];
      acc[book["category"]].push(book);
      return acc;
    }, {});

    return (
      <div>
        <div>
          <Header searchBooks={this.searchBooks} />
          <Switch>
            <Route path="/add">
              <NewBook addBook={this.addBook} />
            </Route>
            <Route path="/:title">
              <BookDetails
                currentBook={this.state.currentBook}
                deleteBook={this.deleteBook}
              />
            </Route>
            <Route path="/">
              <Books
                booksByCategory={booksByCategory}
                getSingleBook={this.getSingleBook}
              />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
