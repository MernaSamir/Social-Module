import { Input } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Photo } from "@material-ui/icons";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import React, { Component } from "react";
export default class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
  }

  handleChange(event) {
    const { field } = this.props;
    field.onChange({
      target: "photo",
      value: URL.createObjectURL(event.target.files[0]),
    });
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }
  render() {
    return (
      <div>
        <input
          style={{ display: "none" }}
          accept="image/*"
          //   className={classes.input}
          id="icon-button-file"
          type="file"
          onChange={this.handleChange.bind(this)}
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
        <img src={this.state.file} />
        <video width="200" height="200" controls>
          <source src={this.state.file} type="video/mp4" />
        </video>
        {/* <div>{this.state.file}</div> */}
      </div>
    );
  }
}
