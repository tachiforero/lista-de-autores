import React, {useEffect, useState}from 'react';
import {BrowserRouter as Router, Switch, Route, useParams} from "react-router-dom";
import AuthorForm from "../components/AuthorForm"
import axios from 'axios';

const Edit = () => {
    const [autor, setAutor] = useState();
    const {id} = useParams();

    useEffect(() => {
        console.log(autor)
    }, [autor]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/author/"+id)
        .then(res=>{
            console.log(res.data)
            setAutor(res.data.user)})
        .catch(err=>console.log("Error:", err))
        }, []);

    const editarAutor = (values) =>{
        axios.put("http://localhost:8000/api/author/update/"+id, values)
        .then(res=>{
            console.log(res.data)})
        .catch(err=>console.log("Error:", err))
    }    

    return (
        <div>
            {autor&&<AuthorForm onSubmitProp={editarAutor} initialName={autor?.firstName}></AuthorForm>}
        </div>
    );
}

export default Edit;
