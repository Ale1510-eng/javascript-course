
// Regularmente arrow function
export const Navbar = () => {

    const cohorte = 50;

    const navabarJsx = (
    <nav>
        {/* se imprime el numero de cohorte */}
        <h2>Cohorte {cohorte}</h2>
        <ul>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contacto</li>
        </ul>
    </nav>
    );

    return navabarJsx;
};


//export { Navbar };