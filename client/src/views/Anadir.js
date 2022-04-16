import React from 'react';
import PetForm from '../components/PetForm';
import axios from 'axios';
// import { Pet } from '../../server/models/pet.model';


const Anadir = () => {


    const crearPet = (values, setError, setSucess) => {
        console.log(setError)
        axios.post("http://localhost:8000/api/pet", values)
            .then(res=>{
                console.log("Response2:", res)
                setSucess(true);
            })
            .catch(err=> {
                setError(err.response.data.errors)
            })
    }

    return (
        <div>     
        <PetForm name= "" type="" petdescription="" skills1="" skills2="" skills3="" onSubmitProp={crearPet}></PetForm>
        </div>
    );
}

export default Anadir;
