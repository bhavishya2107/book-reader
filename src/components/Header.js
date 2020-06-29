import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../stylesheets/header.css";

class Header extends Component {
  render() {
    return (
      <div className="navbar-fix">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" class="navbar-brand" href="#">
            Books
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto"></ul>
            {this.props.history.location.pathname === "/" && (
              <div class="form-inline my-2 my-lg-2">
                <input
                  class="form-control mr-lg-5"
                  type="search"
                  placeholder="Search By Book Name"
                  aria-label="Search"
                  onChange={(e) => this.props.searchBooks(e.target.value)}
                />
              </div>
            )}
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Header);
