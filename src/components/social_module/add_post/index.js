import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button } from "@material-ui/core";
import Upload from "./components/media";
import Text from "./components/text";
import Select from "./components/select";
import { newPost } from "../../../actions/postsActions";
import { connect } from "react-redux";
import { get } from "lodash";
import Alert from "@material-ui/lab/Alert";
class AddPost extends Component {
  onSubmit = (values, { setSubmitting, resetForm }) => {
    if (values) {
      values = { ...values, created_at: new Date() };
      this.props.NewPost(values);
      resetForm({});
    }
  };

  render() {
    return (
      <>
        <Formik
          onSubmit={this.onSubmit}
          enableReinitialize={true}
          initialValues={{
            text: "",
            media: {},
            tags: "",
          }}
        >
          {({ submitForm, isSubmitting, resetForm, values }) => {
            console.log(
              !get(values, "media.file"),
              "vaaaaaaaaaa",
              !get(values, "text")
            );
            return (
              <Form>
                <Field component={Text} name="text" label="Write Post" />
                <Field component={Upload} name="media" />
                <Field component={Select} name="category" label="Category" />
                <Field component={Text} name="tags" label="Tags" />
                <div className="btn-container">
                  <Button
                    type="reset"
                    onClick={resetForm}
                    color="secondary"
                    variant="contained"
                  >
                    Reset All
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!get(values, "media.file", values.text)}
                    onClick={submitForm}
                  >
                    Post
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    NewPost: (post) => dispatch(newPost(post)),
  };
};
export default connect(null, mapDispatchToProps)(AddPost);
