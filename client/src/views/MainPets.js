import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";


const Mainpets = () => {
    const [pet, setPet] = useState();
    const navigate = useNavigate();

console.log(pet)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pet")
        .then(res=>setPet(res.data))
        .catch(err=>console.log("Error:",err))
    },[]);

    return (
        <div>
            <div className="titulo">
                <h1>PET SHELTER</h1>
                <Link to={"/new"}>Crea aquí tu nuevo pet</Link>
            </div>
            
            <h3>These pets are looking for a good home</h3>

<table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pet?.map((pet,i)=>{
                            return (
                            <tr key= {i}>
                                <th scope="row">{pet.name}</th>
                                <td>{pet.type}</td>
                                {/* <td>{pet._id}</td> */}
                                <td className="botonesedicioneliminarotro">
                                    <Link className="btn btn-lg btn-primary" to={`/detalles/${pet._id}`}>Detalles</Link>
                                    <button className="btn btn-lg btn-primary" onClick={()=>navigate("/edit/"+pet._id)}>Editar</button>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                    
                </table>

        </div>
    );
}

export default Mainpets;
