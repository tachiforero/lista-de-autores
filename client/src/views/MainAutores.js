// import React, {useEffect, useState} from 'react';
// import axios from 'axios';
// import {Link, useNavigate} from "react-router-dom";


// const Mainautores = () => {
// const [autores, setAutores] = useState();
// const navigate = useNavigate();

// console.log(autores)


// const eliminar = (id) => {
//     axios.delete(`http://localhost:8000/api/author/delete/` + id)
//     .then(res=>console.log(res))
// }

//     useEffect(() => {
//         axios.get("http://localhost:8000/api/author")
//         .then(res=>setAutores(res.data))
//         .catch(err=>console.log("Error:", err))
//         }, []);

//     return (
//         <div>
//             <h1>Autores Favoritos</h1>
//             <Link to={"/new"}>Crea aquí tu nuevo autor</Link>

// <table className="table">
//                     <thead>
//                         <tr>
//                             <th scope="col">ID</th>
//                             <th scope="col">First</th>
//                             <th scope="col">Acciones</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {autores?.map((autores,i)=>{
//                             return (
//                             <tr key= {i}>
//                                 <th scope="row">{autores._id}</th>
//                                 <td>{autores.firstName}</td>
//                                 <td><button className="btn btn-lg btn-primary" onClick={()=>navigate("/edit/"+autores._id)}>Editar</button></td>
//                                 <td><button className="btn btn-lg btn-primary" onClick={()=> {eliminar(autores._id)}} >Eliminar</button></td>
//                             </tr>
//                             )
//                         })}
//                     </tbody>
//                 </table>

//         </div>
//     );
// }

// export default Mainautores;
