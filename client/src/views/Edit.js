import React, {useEffect, useState}from 'react';
import {useParams} from "react-router-dom";
import Petform from '../components/PetForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
    const navigate = useNavigate();
    const [pet, setPet] = useState();
    const {id} = useParams();

    const handlerClick = () => {
        navigate ("/")
    }

    useEffect(() => {
        console.log(pet)
    }, [pet]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/"+id)
        .then(res=>{
            console.log(res.data)
            setPet(res.data.user)})
        .catch(err=>console.log("Error:", err))
        }, []);

    const editarAnimal = (values) =>{
        axios.put("http://localhost:8000/api/pet/update/"+id, values)
        .then(res=>{
            console.log(res.data)})
        .catch(err=>console.log("Error:", err))
    }    

    return (
        <div>
            {pet&&<Petform onSubmitProp={editarAnimal} name={pet?.name} type={pet?.type} petdescription={pet?.petdescription} skills1={pet?.skills[0]} skills2={pet?.skills[1]} skills3={pet?.skills[2]}></Petform>}
            <button className="hola btn btn-primary" type="submit" onClick={handlerClick}>Volver</button>
        </div>
    );
}

export default Edit;
