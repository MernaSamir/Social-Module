import React, { Component } from 'react'
import { TextField } from "@material-ui/core";

export default class Text extends Component {

    handleChange = (event) => {
        const {field} = this.props
        field.onChange({
            target: {
                name: field.name,
                value: event.target.value,
            }
        })
    }
  render() {
    return (
    <TextField onChange={this.handleChange} variant="outlined"/>
    )
  }
}

