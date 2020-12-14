import { Input } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Photo } from "@material-ui/icons";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import React, { Component } from "react";
import ReactPlayer from 'react-player'

export default class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
  }

  handleChange=(event)=> {
    const { field } = this.props;
    if(event.target.files.length) {
      field.onChange({
        target: {
          name:field.name,
          value: URL.createObjectURL(event.target.files[0]),
        }
      });
      this.setState({
        file: URL.createObjectURL(event.target.files[0]),
        name: event.target.files[0].name,
        type: event.target.files[0].type
      });
    }
  }
  render() {
    return (
      <div>
        <input
          style={{ display: "none" }}
          // accept="image/*"
          //   className={classes.input}
          id="icon-button-file"
          type="file"
          onChange={this.handleChange}
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
       { this.state.file &&
       <>
         { this.state.type?.includes("image") && <img src={this.state.file} />}
        { this.state.type?.includes("video") && <video key={this.state.name} width="200" height="200" controls>
          <source src={this.state.file} type="video/mp4" />
        </video>}
       </>
        }
      </div>
    );
  }
}
