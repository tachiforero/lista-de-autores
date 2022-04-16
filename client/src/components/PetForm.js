import React, {useEffect, useState} from 'react';
import {Formik, Field, Form} from "formik"
import * as Yup from "yup";
import { useNavigate, NavLink} from "react-router-dom";


const Petform = (props) => {

    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [success, setSucess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    const { name, type, petdescription, skills1, skills2, skills3, onSubmitProp} = props

    const crearNuevo = (values) =>{
        const data = {
            name: values.name, 
            type: values.type, 
            petdescription: values.petdescription,
            skills: [values.skills1, values.skills2, values.skills3]
        }
    }
    
    useEffect(() => {
        console.log('UseEffect Error', );
        if (error) {
            setErrorMessage(error.name.message);
        }
    }, [error]);

    useEffect(() => {
        if (success) {
            navigate("/")
        }
    }, [success]);

    const handleClick = () => {
        navigate ("/")
    };

    return (
        <div>

        <div>
            <Formik
            initialValues = {{
                name: name,
                type: type, 
                petdescription: petdescription,
                skills1: skills1, 
                skills2: skills2,
                skills3: skills3
            }}

            validationSchema = {Yup.object().shape ({
                name: Yup.string()
                .min(3, "Tu nombre es muy corto")
                .required("Obligatorio")
                .max(15,"Tu nombre es muy largo"),

                type: Yup.string()
                .min(3, "Tu type es muy corto")
                .max(15,"Tu type es muy largo")
                .required("Obligatorio"),

                petdescription: Yup.string()
                .min(3, "Tu type es muy corto")
                .max(100,"Tu type es muy largo")
                .required("Obligatorio"),

                skills1: Yup.string()
                .min(2, "Tu type es muy corto")
                .max(15,"Tu type es muy largo"),


                skills2: Yup.string()
                .min(2, "Tu type es muy corto")
                .max(15,"Tu type es muy largo"),


                skills3: Yup.string()
                .min(2, "Tu type es muy corto")
                .max(15,"Tu type es muy largo"),


            })}

            onSubmit={(values,{setSubmitting})=>{
                crearNuevo(values);
                onSubmitProp(values,setError, setSucess);
            }}

        >
            {({errors,
        touched,
        handleSubmit})=>{

            return (
                <div>
                    <div className="backtohome">
                        <NavLink to = "/">Back to home</NavLink>
                    </div>
                    <div>{errorMessage}</div>
                    <div className= "formularioformik">
                        <h2>Formulario de registro</h2>
                        <Form onSubmit={handleSubmit}>
                            <label htmlFor='name'>Nombre de la mascota</label>
                            <Field id="name" type="text" placeholder="Nombre" name="name" className="form-control"/>
                            {errors.name && touched.name && <p className='error'>{errors.name}</p>}

                            <label htmlFor='type'>Tipo de mascota</label>
                            <Field id="ype" type="text" placeholder="Tipo" name="type" className="form-control"/>
                            {errors.type && touched.type && <p className='error'>{errors.type} </p>}

                            <label htmlFor='petdescription'>Descripción de la mascota</label>
                            <Field id="ype" petdescription="text" placeholder="Tipo" name="petdescription" className="form-control"/>
                            {errors.petdescription && touched.petdescription && <p className='error'>{errors.petdescription} </p>}

                            <label htmlFor='skills1'>Habilidades</label>
                            <Field id="ype" skills1="text" placeholder="Tipo" name="skills1" className="form-control"/>
                            {errors.skills1 && touched.skills1 && <p className='error'>{errors.skills1} </p>}

                            <label htmlFor='skills2'>Habilidades</label>
                            <Field id="ype" skills2="text" placeholder="Tipo" name="skills2" className="form-control"/>
                            {errors.skills2 && touched.skills2 && <p className='error'>{errors.skills2} </p>}

                            <label htmlFor='skills3'>Habilidades</label>
                            <Field id="ype" skills3="text" placeholder="Tipo" name="skills3" className="form-control"/>
                            {errors.skills3 && touched.skills3 && <p className='error'>{errors.skills3} </p>}

                            <button type="submit" disabled={Object.values(errors).length>0} className="btn btn-primary mt-3">Registrarse</button>
                            </Form>
                    </div>
                </div>
            )
        }}
            </Formik>
        </div>


        </div>
    );
}

export default Petform;
