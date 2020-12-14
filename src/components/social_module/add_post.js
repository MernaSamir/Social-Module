import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button } from "@material-ui/core";
import Upload from "./upload";
export default class AddPost extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          text: "",
        }}
        //   validate={values => {
        //     const errors: Partial<Values> = {};
        //     if (!values.email) {
        //       errors.email = 'Required';
        //     } else if (
        //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        //     ) {
        //       errors.email = 'Invalid email address';
        //     }
        //     return errors;
        //   }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Field component={TextField} name="text" />
            <br />
            <Field component={Upload} name="image" />
            {/* {isSubmitting && <LinearProgress />} */}
            <br />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      //   <form>
      //     <TextField variant="outlined"></TextField>
      //     <Upload />
      /* <input
          accept="image/*"
          //   className={classes.input}
          id="icon-button-file"
          type="file"
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label> */
      //   </div>
    );
  }
}
