import App from "./App"
import Nav from "./Nav"

const Footer = (props) => {


    console.log(props)
    console.log(props.nombre);
    return (
        <footer>
            <p>Bienvenido {props.nombre}  </p>
            <Nav type="footer"   ></Nav>
        </footer>
    )
}

export default Footer