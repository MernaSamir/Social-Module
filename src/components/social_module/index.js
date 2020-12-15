import React, { Component } from "react";
import { Container } from "@material-ui/core";
import AddPost from "./add_post";
import Posts from "./posts";
import classes from "./style.css";
export default class mainModule extends Component {
  render() {
    return (
      <div className="container">
        <p className="main">Social Module</p>
        <div className="new">
          <AddPost />
        </div>
        <Posts />
      </div>
    );
  }
}
