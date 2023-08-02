import React from "react";
// TODO: import useFormik from formik library
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Username should be an email')
    .required('Field required'),
  password: Yup.string()
    .required('Field required'),
});

function App() {
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={() => {
          alert('Login successful');
        }}
        >
          {() => (
            <Form>
              <div>
                <label htmlFor="emailField">Email: </label>
                <Field name="email" type="email" id="emailField" />
                <div id="emailError">
                  <ErrorMessage name="email" />
                </div>
              </div>

              <div>
                <label htmlFor="pswField">Password: </label>
                <Field name="password" type="password" id="pswField" />
                <div id="pswError">
                  <ErrorMessage name="password" />
                </div>
              </div>

              <div>
                <button type="submit" id="submitBtn">Submit</button>
              </div>
            </Form>
          )}
        </Formik>
    </div>
  );
}


export default App;
