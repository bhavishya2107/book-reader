import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

class NewBook extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      content: "",
      category: "",
      cover: "",
      author: "",
      id: uuidv4(),
    };
  }

  handlechange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  validation = () => {
    if (
      this.state.category === "" &&
      this.state.author === "" &&
      this.state.title === "" &&
      this.state.description === ""
    ) {
      alert("Please enter all the details!!!");
    } else {
      this.props.addBook(this.state);
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div className="container p-5">
        <h1 className="text-center p-3">ADD BOOK</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.validation();
          }}
        >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Title"
              value={this.state.title}
              name="title"
              onChange={this.handlechange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Description</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Description"
              value={this.state.description}
              name="description"
              onChange={this.handlechange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Cover Image</label>
            <input
              type="url"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Paste Cover Image"
              value={this.state.cover}
              name="cover"
              onChange={this.handlechange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Content (Markdown)</label>
            <textarea
              className="form-control"
              rows="15"
              id="content"
              name="content"
              onChange={this.handlechange}
              placeholder="Content in Markdown"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Author</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Description"
              value={this.state.author}
              name="author"
              onChange={this.handlechange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Category</label>
            <select
              className="form-control"
              onChange={this.handlechange}
              name="category"
            >
              <option>Action and adventure</option>
              <option>Children's</option>
              <option>Fairytale</option>
              <option>Thriller</option>
              <option>Crime</option>
              <option>Suspense</option>
              <option>Drama</option>
              <option>Health/fitness</option>
              <option>Self help</option>
              <option>Sports and leisure</option>
              <option>Travel</option>
              <option>Other</option>
            </select>
          </div>
          <button type="submit" className="btn btn-success">
            ADD
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(NewBook);
