import React, { Component } from "react";
import { Link } from "react-router-dom";
import SingleBook from "../components/SingleBook";

class Books extends Component {
  render() {
    let books = Object.keys(this.props.booksByCategory);
    console.log(this.props.booksByCategory);
    return (
      <div>
        <h1 className="text-center">Books</h1>
        {books.length ? books.map((category) => {
          return (
            <div className="container-fluid p-5">
              <h1>{category}</h1>
              <div className="d-flex overflow-custom">
                {this.props.booksByCategory[category].map((book) => {
                  return <SingleBook {...book} getSingleBook={this.props.getSingleBook} />;
                })}
              </div>
            </div>
          );
        }) : <p className="text-center font-weight-light">No Books Found!<p>Add a book</p></p> }
      
        <Link to="/add">
          <div className="addBook button-add " title="Add a book">+</div>{" "}
        </Link>
      </div>
    );
  }
}

export default Books;
