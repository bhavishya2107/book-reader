import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "../stylesheets/page.css";
const ReactMarkdown = require("react-markdown");


class BookDetails extends Component {
  handleDelete = (id) => {
    this.props.deleteBook(id);
    this.props.history.push("/");
  };
  render() {
    console.log(this.props, "propes");

    return this.props.currentBook ? (
      <main className="main-container">
        <div className="group">
          <div className="left-page">
            <figure className="book-image">
              <img
                src={
                  this.props.currentBook.cover
                    ? this.props.currentBook.cover
                    : "/assets/cover.jpg"
                }
              />
              <button
                className="btn btn-danger m-2"
                onClick={() => this.handleDelete(this.props.currentBook.id)}
              >
                Delete Book
              </button>
            </figure>
          </div>
        </div>
        <div className="right-page">
          <section className="p-5">
            <h1>{this.props.currentBook.title}</h1>
            <h4>{this.props.currentBook.description}</h4>
            <p>{<ReactMarkdown source={this.props.currentBook.content} />}</p>
          </section>
        </div>
      </main>
    ) : (
      <h3 className="m-custom  text-center">
        Go back to {<Link to="/">Books</Link>}
      </h3>
    );
  }
}

export default withRouter(BookDetails);
