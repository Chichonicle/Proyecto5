
import "./WorkersCard.sass";

export const WorkersCards = ({name,license, photo}) =>{

    return (
        <div className="CardDesign" draggable="false">
            <div>Nombre {name} </div>
            <div><img className="photo" src={photo}  alt={photo}/></div>
            <div>Licencia {license}</div>
        </div>
    )
}