import React, { Component } from "react";
import { Container } from "@material-ui/core";
import AddPost from "./add_post";
export default class mainModule extends Component {
  render() {
    return (
      <Container>
        <AddPost />
      </Container>
    );
  }
}
