import React from 'react';
import {Formik, Field, Form} from "formik"
import * as Yup from "yup";
import {Link} from "react-router-dom";

const Anadir = (props) => {

    const {initialName, onSubmitProp} = props

    return (
        <div>

        <div>
            <Formik
            initialValues = {{
                firstName: initialName,
            }}
            
            validationSchema = {Yup.object().shape ({
                firstName: Yup.string()
                .min(2, "Tu nombre es muy corto")
                .max(15,"Tu nombre es muy largo")
                .required("Obligatorio")
            })}

            onSubmit={(values,{setSubmitting})=>{
                onSubmitProp(values);
                console.log(values);
            }}

        >
            {({errors,
        touched,
        handleSubmit})=>{

            return (
                <div className= "formularioformik">
                    <h2>Formulario de registro</h2>
                    <Form onSubmit={handleSubmit}>
                        <label htmlFor='firstName'>Nombre</label>
                        <Field id="firstName" type="text" placeholder="Nombre" name="firstName" className="form-control"/>
                        {errors.firstName && touched.firstName && <p className='error'>{errors.firstName} </p>}

                        <button type="submit" disabled={Object.values(errors).length>0} className="btn btn-primary mt-3">Registrarse</button>
                        </Form>
                </div>
            )
        }}
            </Formik>
        </div>


        </div>
    );
}


export default Anadir;
