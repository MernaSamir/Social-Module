import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import "./comstyle.css";
import { StylesProvider } from "@material-ui/core/styles";
import { isEqual, get } from "lodash";

export default class Text extends Component {
  handleChange = (event) => {
    const { field } = this.props;
    field.onChange({
      target: {
        name: field.name,
        value: event.target.value,
      },
    });
  };

  render() {
    return (
      <div class="fieldcon">
        <p className="p">{this.props.label}</p>
        <StylesProvider injectFirst>
          <TextField
            onChange={this.handleChange}
            variant="outlined"
            value={get(this.props, `field.value`)}
          />
        </StylesProvider>
      </div>
    );
  }
}
