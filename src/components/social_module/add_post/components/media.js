import { Input } from "@material-ui/core";
import { IconButton, Button } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import React, { Component } from "react";
import { StylesProvider } from "@material-ui/core/styles";

import "../../style.css";
import { get, isEmpty } from "lodash";

export default class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
  }

  handleChange = (event) => {
    const { field } = this.props;

    if (get(event.target.files, "length")) {
      const fileData = {
        file: URL.createObjectURL(event.target.files[0]),
        name: event.target.files[0].name,
        type: event.target.files[0].type,
      };
      field.onChange({
        target: {
          name: field.name,
          value: fileData,
        },
      });
      this.setState({ ...fileData });
    }
  };
  remove = () => {
    const { field } = this.props;
    field.onChange({
      target: {
        name: field.name,
        value: {},
      },
    });
  };
  render() {
    const { field } = this.props;
    console.log(field.value, "fffffhhfhfhgfh");
    const src = get(this.props, `field.value.file`);
    const clear = true;
    return (
      <div className="media">
        <input
          style={{ display: "none" }}
          // accept="image/*"
          //   className={classes.input}
          id="icon-button-file"
          type="file"
          onChange={this.handleChange}
        />
        <label htmlFor="icon-button-file">
          {/* <Button
          variant="contained"
          color="primary"
          startIcon={<CloudUploadIcon />}
        >
          Upload
        </Button> */}
          <StylesProvider injectFirst>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </StylesProvider>
        </label>
        {field.value && (
          <div style={{ display: "flex" }}>
            {get(field.value, "type")?.includes("image") && (
              <img src={src} width="50%" height="50%" alt="" />
            )}
            {get(field.value, "type")?.includes("video") && (
              <video
                key={get(field.value, "name")}
                width="80%"
                height="80%"
                controls
              >
                <source src={src} type="video/mp4" />
              </video>
            )}
            {!isEmpty(field.value) && (
              <Button
                type="button"
                onClick={this.remove}
                color="primary"
                // variant="defaul"
              >
                X
              </Button>
            )}
          </div>
        )}
      </div>
    );
  }
}
