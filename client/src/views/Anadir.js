import React from 'react';
import AuthorForm from "../components/AuthorForm"
import axios from 'axios';


const Anadir = () => {

    const crearAutor = values => {
        axios.post("http://localhost:8000/api/author", values)
            .then(res=>console.log("Response:", res))
            .catch(err=>{console.log(err.response.data.errors)

            })
    }

    return (
        <div>     
        <AuthorForm initialName= "" onSubmitProp= {crearAutor}></AuthorForm>
        </div>
    );
}

export default Anadir;
