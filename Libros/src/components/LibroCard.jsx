import Libros from "./Libros"

function LibroCard({libro}){
    return(
        <>
            <div class="card text-bg-dark mb-3" style={{width: "18rem"}}>
                <h5 class="car-tittel">{libro.titulo}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">{libro.generos}</h6>
                <img src={`./src/assets/${libro.imagen}`} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">{libro.introduccion}</p>
                </div>
                <a href={libro.linkBiografia} class="card-link">{libro.autor}</a>
            </div>
        </>
    )
}
export default LibroCard