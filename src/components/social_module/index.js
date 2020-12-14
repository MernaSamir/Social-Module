import React, { Component } from "react";
import { Container } from "@material-ui/core";
import AddPost from "./add_post";
import Posts from "./posts";

export default class mainModule extends Component {
  render() {
    return (
      <Container>
        <AddPost />
        <Posts/>
      </Container>
    );
  }
}
