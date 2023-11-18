import { Formik} from 'formik';
import { Form, redirect,Link, useSubmit} from 'react-router-dom';
import { apiCall } from '../utils';
import logo from '../assets/BiteSquad.png'
import {toast} from 'react-toastify';
import { FormInput } from '../components';

export const action = async({request}) => {
  const formData= await request.formData();
  const data= Object.fromEntries(formData);

  try {
    const response = await apiCall.post('/api/login',data);
    toast.success(response.data.message)
    console.log(response.data)
    return redirect('/')
  } catch (error){
    toast.error(error?.response?.data?.message)
    return null;
  }
}

const Login = () => {
  const submit = useSubmit();
  return (
    <div className="bg-gray-100">
    <Formik initialValues={{
      email:"",
      password:""
    }}
    onSubmit={async (values) =>{
      submit(values,{method:'post'})
    }}
    validate={(values) => {
      const errors = {};
      if(!values.email) {
        errors.email='Required'
      // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email='Invalid email address'
      }
      if(!values.password) {
        errors.password='Required'
      } else if(values.password.length < 8){
        errors.password='Required at least 8 character'
      }
      return errors;
    }}
    >
    {({values, isValid,touched,errors,dirty,handleBlur, handleChange,handleSubmit,isSubmitting}) => (
      <section className="h-screen grid place-items-center">
            <img className="logo" src={logo} alt="logo" />
            <Form
              onSubmit={handleSubmit}
              method="POST"
              className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-2"
            >
              <h1 className="text-center text-3xl font-bold tracking-widest">Login</h1>
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
                value={values.password}
                type="password"
                label="password"
                placeholder="test1234"
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.password}
                error={errors.password}
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
                Do not have an account?
                <Link className="link" to="/register">             
                  <span className="pl-2">Register</span>
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

export default Login