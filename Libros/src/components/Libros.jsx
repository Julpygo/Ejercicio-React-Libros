import { useState, useEffect } from "react";
import LibrosData from "../data/libros.json"
import LibroCard from "./LibroCard";
//import styles from "./libros.modulo.css"

function Libros(){
    const [libros,setLibros] = useState([])
    useEffect(()=>{
        setLibros(LibrosData)
    },[])
    return(
        <>
        <section className="container">
            <h2 className="text-center">Mi colección de libros favoritos</h2>
            <h4 className="text">{libros.length} libros favoritos</h4><br></br>
            <div className="row">
                {libros.map((libro,i)=>(
                    <div className="col-md-4" key={i}>
                        <LibroCard libro={libro} />
                    </div>
                ))}
            </div>
        </section>
        {console.log(libros)}
        </>
    )
}

export default Libros