import React, { Component } from 'react';
import { Formik } from 'formik';

class ContactView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Contact</h2>
                <Formik
                    initialValues={{
                        email: 'matiasaybar89@gmail.com',
                        user: 'matias'
                    }}
                    validate={values => {
                        console.log('>>> validate', values);
                        let errors = {};
                        if(values.user === '') {
                            errors.user = 'Required';
                        }
                        return errors;
                    }}
                    onSubmit={(values) => {
                        console.log('>>> Values', values);
                    }}
                >
                    {({
                        values,
                        handleSubmit,
                        handleChange,
                        errors
                    }) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    className="form-control mt-4 mb-4"
                                    value={values.email}
                                    onChange={handleChange}
                                    name="email"
                                />
                                <input
                                    type="text"
                                    className="form-control mt-4 mb-4"
                                    value={values.user}
                                    onChange={handleChange}
                                    name="user"
                                />
                                {errors.user ? errors.user : null}
                                <button type="submit">Enviar</button>
                            </form>
                        );
                    }}
                </Formik>
            </div>
        );
    };
}

export default ContactView;