import React, {useEffect, useState} from 'react';
import {useParams, useNavigate, NavLink} from "react-router-dom";
import axios from 'axios';

const Detalle = () => {
    const [petUnico, setPetUnico] = useState();
    const [likes, setLikes] = useState(0);
    const [pet, setPet] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    const traerPorID = () => {
            axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res=>setPetUnico(res.data.user))
            .catch(err=>console.log("Error:", err))
    }

    useEffect(() => {
        id && traerPorID()
    }, [id]);

    const eliminar = () => {
        axios.delete(`http://localhost:8000/api/pet/delete/`+id)
        .then(res=>console.log(res))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet")
        .then(res=>setPet(res.data))
        .catch(err=>console.log("Error:", err))
        }, []);

    const subirlikes =()=>{
        setLikes (likes + 1)
    }

    const handleClick = () => {
        navigate ("/")
    };

    return (
        <div className="perros">
            <div className="detalleperros">
                <div className="backtohome">
                    <NavLink to = "/">Back to home</NavLink>
                </div>
                <div className="botonadoptar"> 
                    <h1>PET SHELTER</h1>
                    <button className="btn btn-lg btn-primary" onClick={()=> {eliminar(pet._id)}}> ¡Adoptar!</button>
                </div>
                <div>
                    {petUnico && <h2>Detalles sobre: {petUnico.name}</h2>}
                
                </div>
            
            </div>

            <div className="cajadetalle">
                {petUnico && <h2>Descripción: {petUnico.petdescription}</h2>}
                {petUnico && <h2>Habilidades: {petUnico.skills}</h2>}
            </div>

            <div className="contador">
                {petUnico && <p  onClick= {subirlikes} className="botonback btn btn-primary mt-3" > ¡Like {petUnico.name}!</p>}
                <h1>{likes}Like(s)</h1>
            </div>
        
            <div>
            <div className="contenedorboton">
                </div>
            </div>
        </div>
    );
}

export default Detalle;
