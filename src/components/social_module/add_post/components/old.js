import React, { Component } from "react";
import { get } from "lodash";
import classes from "./style.less";
import { Formik, Form, Field } from "formik";
// import moment from "moment";
import { TextField } from "@material-ui/core";

class MultiInputs extends Component {
  state = {
    tags: [],
    clear: false,
  };
  handleChange = (event) => {
    const { field } = this.props;
    console.log(field, "fffffffffff");
    field.onChange({
      target: {
        name: field.name,
        value: event.target.value,
      },
    });
  };

  addTag = () => {
    const { field } = this.props;
    this.setState({
      tags: [...this.state.tags, field.value],
      clear: true,
    });
    console.log(this.state.tags, "hkjhjhjh");

    field.onChange({
      target: {
        name: field.name,
        value: this.state.tags,
      },
    });
  };

  removeItem = (index) => {
    const {
      field: { value: fValue, onChange, name },
    } = this.props;
    const val = fValue[index];
    let vals = fValue.filter((_, i) => i != index);
    if (val.id) {
      vals = fValue.slice();
      vals[index].remove = true;
    }
    onChange({ target: { name, value: vals } });
  };

  //   renderField() {
  //     const {text_validates, field, field_name, onClick = () => { }, numPad = true, text_label} = this.props;
  //     return<TextField  />
  //     // Render([{
  //       type: 'TextBox',
  //       name: field_name,
  //       validates: text_validates,
  //       numPad: numPad,
  //       noLabel: text_label,
  //     // }],
  //     {onClick: onClick.bind(this, {...this.props, name: field_name + field.name}, this.handelChange.bind(this))})
  //   }

  render() {
    const { field } = this.props;
    console.log(field.value, "jjjjfiii");
    return (
      <>
        <div>
          <div>
            <TextField onChange={this.handleChange} />
            <button type="button" onClick={this.addTag}>
              +
            </button>
          </div>

          {/* {this.renderField()} */}
        </div>
        <div>
          {/* {field.value && (
            <div className={classes.secDiv}>
              {(field.value || []).map((d, k) => (
                <>
                  <div key={k} className={d.remove ? "remove" : ""}>
                    <p>{get(d, field_name)}</p>
                    <button
                      onClick={this.removeItem.bind(this, k)}
                      type="button"
                    >
                      x
                    </button>
                  </div>
                </>
              ))}
            </div>
          )} */}
        </div>
      </>
    );
  }
}
export default MultiInputs;
