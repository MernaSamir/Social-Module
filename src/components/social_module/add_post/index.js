import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button } from "@material-ui/core";
import Upload from "./upload";
import Text from "./text";
import {newPost} from "../../../actions/postsActions";
import {connect} from 'react-redux'
 class AddPost extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          text: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values,"vaaaaaaaaaa")
          values={...values,created_at:new Date}
          console.log(values,"hgjhghg")

          this.props.NewPost(values);
          // setTimeout(() => {
          //   setSubmitting(false);
          //   alert(JSON.stringify(values, null, 2));
          // }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Field component={Text} name="text" />
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
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    NewPost: (post) => dispatch(newPost(post))
  }
}
export default connect(null, mapDispatchToProps)(AddPost )