// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaArrowRight } from "react-icons/fa6";

const ContactForm = () => (
  <div>
     
      <h1 className='text-xl font-semibold text-gray-900 pb-6'>Contact Us</h1>
      <h1 className='text-xl font-semibold text-gray-900 pb-6 uppercase'>Prajapati Automobiles</h1>

    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col gap-y-4 max-w-[60%]'>
          <Field type="text" name="name" placeholder="Name" className="rounded px-4 py-1 placeholder:text-gray-900 outline-none"/>
          <ErrorMessage name="name" component="div" />

          <Field type="email" name="email" placeholder="Email" className="rounded px-4 py-1 placeholder:text-gray-900 outline-none"/>
          <ErrorMessage name="email" component="div" />

          <Field type="text" name="message" placeholder="Message" className="rounded px-4 py-1 placeholder:text-gray-900 outline-none"/>
          <ErrorMessage name="message" component="div" />

          <button className='bg-blue-600 w-fit mx-auto  py-1 rounded font-semibold text-white relative pr-16 pl-4' type="submit" disabled={isSubmitting}>
             Submit
             <div className='w-[30px] h-[40px] bg-green-500 absolute ml-8 skew-x-[20deg] right-[20px] top-[-4px] flex items-center justify-center'>
                <FaArrowRight className='skew-x-[-20deg]'/>
             </div>
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default ContactForm;