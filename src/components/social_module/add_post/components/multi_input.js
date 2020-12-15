import React, { Component } from "react";
import { get } from "lodash";
import { Formik, Form, Field } from "formik";

class MultiInputs extends Component {
  handelChange = (ev) => {
    const { field, handleChange } = this.props;
    console.log(ev.target.value, "hohih");
    field.onChange({ target: { name: field.name, value: ev.target.value } });
  };

  onSubmit = (values, formProps) => {
    console.log("hnaaaaa", values);
    // const {
    //   field: { value: fValue, onChange, name },
    //   extra,
    // } = props;
    // onChange({
    //   target: { name, value: [...(fValue || []), { ...values, ...extra }] },
    // });
    // formProps.resetForm({});
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

  render() {
    const { field, field_name, width, note_date, disabled } = this.props;
    console.log(field.value, "jjjjfiii");
    return (
      <>
        <div style={{ width: width }}>
          <Formik onSubmit={this.onSubmit} enableReinitialize={true}>
            {({ submitForm }) => (
              <Form>
                <Field name="tag" onChange={this.handelChange}>
                  {/* <input onChange={this.handelChange}></input> */}
                </Field>
                <button type="button" onClick={submitForm}>
                  +
                </button>
              </Form>
            )}
          </Formik>
          {/* {this.renderField()}
          <button onClick={this.props.handleSubmit} className={classes.onSubmitBtn}>+</button> */}
        </div>
        {/* <div>
          {!disabled && (
            <div>
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
          )}
        </div> */}
      </>
    );
  }
}

export default MultiInputs;
