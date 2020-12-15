import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { StylesProvider } from "@material-ui/core/styles";

import "./comstyle.css";

export default class select extends Component {
  handleChange = (event) => {
    console.log(event.target.value, "vvvvvvv");
    const { field } = this.props;
    field.onChange({
      target: {
        name: field.name,
        value: event.target.value,
      },
    });
  };
  render() {
    const { field } = this.props;
    return (
      <div class="fieldcon">
        <p className="p">{this.props.label}</p>

        <FormControl variant="outlined">
          {/* <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel> */}
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={field.value || "please"}
            onChange={this.handleChange}
            autoWidth={true}
          >
            <MenuItem value={"business"}>Business</MenuItem>
            <MenuItem value={"social"}>Social</MenuItem>
            {/* <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </FormControl>
      </div>
    );
  }
}
