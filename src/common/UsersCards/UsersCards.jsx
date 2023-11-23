import "./UsersCards.css";

export const UsersCards = ({name,email, role, created}) =>{

    return (
        <div className="AllUserCardDesign" draggable="false">
            <div>Nombre: {name} </div>
            <div>Email: {email} </div>
            <div>Role: {role} </div>
            <div>Creacion: {created} </div>
        </div>
    )
}