import logo from "./../assets/logo.png";
export default function Header() {
    return(
        <div className="p-5 bg-primary text-white text-center">
            <h1><img src={logo} className="logo-header"  /> Facil cocina para idiotas</h1>
            <p>De nuestra chimba de receta a tu asquerosa boca</p> 
        </div>
    )
}
