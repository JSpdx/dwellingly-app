import React, { Component } from 'react';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { UserContext } from '../App';
import classNames from 'classnames';
import * as axios from 'axios';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "*Name must have at least 2 characters")
        .max(100, "*Names can't be longer than 100 characters"),
    address: Yup.string()
        .required("*Address is required"),
    city: Yup.string()
        .required("*City is required"),
    zipcode: Yup.string()
        .required("*Zipcode is required"),
    state: Yup.string()
        .required("*State is required")
});

const formHandler = (data, context) => {
    axios.post('http://localhost:5000/properties', data, { headers: {"Authorization" : `Bearer ${context.user.accessJwt}`} })
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        })
}

export class AddProperty extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        propertyManagers: undefined,
        }
    }    

    render() {
      return (
        <UserContext.Consumer>
            {session => {
                return (
                    <div className="add-property__container">
                        <h2 className="page-title">Add a New Property</h2>

                        <Formik
                            initialValues={{
                                name: "",
                                address: "",
                                city: "",
                                state: "",
                                zipcode: ""
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values, {setSubmitting, resetForm})=> {
                                console.log("submitting", values);
                                setSubmitting(true);
                                formHandler(values, session);
                                resetForm();
                                setSubmitting(false);
                                
                            }}>
                            {({ handleSubmit, handleChange, values, errors, touched, isValid, isSubmitting }) => (
                                <div className="form-container add-property__main_container">
                                    <h1 className="section-title">PROPERTY INFORMATION</h1>
                                    <Form className="add-property__form-container" onSubmit={handleSubmit}>
                                        <div className="form-row columns">
                                            <label className="column is-one-fifth" htmlFor="name">Name</label>
                                            <Field
                                                className="column form-field"
                                                type="text"
                                                name="name"
                                                onChange={handleChange}
                                                value={values.name}
                                                placeholder="Example Estate"
                                            />
                                        </div>
                                        <div className="form-row columns">
                                            <label className="column is-one-fifth" htmlFor="address">Address</label>
                                            <Field
                                                className="column form-field"
                                                type="text"
                                                name="address"
                                                onChange={handleChange}
                                                value={values.address}
                                                placeholder="123 Main St"
                                            />
                                        </div>
                                        <div className="form-row columns">
                                            <label className="column is-one-fifth" htmlFor="city">City</label>
                                            <Field
                                                className="column form-field"
                                                type="text"
                                                name="city"
                                                onChange={handleChange}
                                                value={values.city}
                                                placeholder="Portland"
                                            />
                                        </div>
                                        <div className="form-row columns">
                                            <label className="column is-one-fifth" htmlFor="state">State</label>
                                            <Field
                                                className="column form-field"
                                                type="text"
                                                name="state"
                                                onChange={handleChange}
                                                value={values.state}
                                                placeholder="OR"
                                            />
                                        </div>
                                        <div className="form-row columns">
                                            <label className="column is-one-fifth" htmlFor="zipcode">Zipcode</label>
                                            <Field
                                                className="column form-field"
                                                type="text"
                                                name="zipcode"
                                                onChange={handleChange}
                                                value={values.zipcode}
                                                placeholder="97217"
                                            />
                                        </div>
                                        <div className="form-row columns">
                                            <label className="column is-one-fifth" htmlFor="zipcode">Units</label>
                                            <Field
                                                className="column form-field"
                                                type="text"
                                                name="units"
                                                onChange={handleChange}
                                                value={values.zipcode}
                                                placeholder="10"
                                            />
                                        </div>
                                        <div className=" add-property__assign-manager-container">
                                            <h3 className="section-title">ASSIGN PROPERTY MANAGERS</h3>
                                            <input></input>
                                        </div>
                                        <div className="container-footer">
                                            <button className={`${isValid && "active"} save_button button is-rounded`} type="submit" disabled={isSubmitting}>SAVE</button>
                                            <button className="button is-dark is-rounded" onClick={()=>{console.log("cancel pressed")}}>CANCEL</button>
                                        </div>
                                    </Form>

                                </div>
                                )}
                        </Formik>
                    </div>
                )
            }}
            
        </UserContext.Consumer>
      )
    }
}