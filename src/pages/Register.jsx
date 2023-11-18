import { Formik } from "formik";
import { Form, redirect, Link, useSubmit } from "react-router-dom";
import { apiCall } from "../utils";
import logo from "../assets/BiteSquad.png";
import { toast } from "react-toastify";
import {FormInput} from "../components";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await apiCall.post("/api/register", data);
    toast.success(response.data.message);
    console.log(response.data);
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return null;
  }
};

const Register = () => {
  const submit = useSubmit();
  return (
    <div className="bg-gray-100">
      <Formik
        initialValues={{
          name: "",
          surname: "",
          email: "",
          username: "",
          password: "",
          password_confirmation: "",
        }}
        onSubmit={async (values) => {
          submit(values, { method: "post" });
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          } else if (values.name.length < 3) {
            errors.name = "Invalid name";
          }
          if (!values.surname) {
            errors.surname = "Required";
          } else if (values.surname.length < 3) {
            errors.surname = "Invalid surname";
          }
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 8) {
            errors.password = "Required at least 8 character";
          }
          if (!values.password_confirmation) {
            errors.password = "Required";
          } else if (values.password_confirmation !== values.password) {
            errors.password_confirmation = "Password do not match";
          }
          return errors;
        }}
      >
        {({
          values,
          isValid,
          touched,
          errors,
          dirty,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <section className="h-screen grid place-items-center">
            <img className="logo" src={logo} alt="logo" />
            <Form
              onSubmit={handleSubmit}
              method="POST"
              className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-2"
            >
              <h1 className="text-center text-3xl font-bold tracking-widest">Register</h1>
              <FormInput
                value={values.name}
                type="text"
                label="name"
                plaseholder="Marko"
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.name}
                error={errors.name}
              />
              <FormInput
                value={values.surname}
                type="text"
                label="surname"
                placeholder="Markovic"
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.surname}
                error={errors.surname}
              />
              <FormInput
                value={values.email}
                type="email"
                label="email"
                placeholder="markomarkovic@gmail.com"
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.email}
                error={errors.email}
              />
              <FormInput
                value={values.username}
                type="text"
                label="username"
                placeholder="markomarkovic"
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.username}
                error={errors.username}
              />
              <FormInput
                value={values.password}
                type="password"
                label="password"
                placeholder="test1234"
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.password}
                error={errors.password}
              />
              <FormInput
                value={values.password_confirmation}
                type="password"
                label="password_confirmation"
                placeholder="test1234"
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.password_confirmation}
                error={errors.password_confirmation}
              />
              <button
                type="submit"
                className="btn btn-error mt-2"
                disabled={!(isValid && dirty) || isSubmitting}
              >
                Register
              </button>
            <section>
              <p>
                Already have an account?
                <Link className="link" to="/login">
                  
                  <span className="pl-2">Login</span>
                </Link>
              </p>
            </section>
            </Form>
          </section>
        )}
      </Formik>
    </div>
  );
};

export default Register;
