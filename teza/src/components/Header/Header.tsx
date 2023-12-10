import WellImag from "../../assets/well 1.png"
import { Link } from 'react-router-dom';

const  Header = () => {
 
    return (
        <div className="bg-brun fixed top-0 w-screen h-28 flex grid-cols-3 justify-between opacity-90  ">
        <div className="flex self-center">
        <Link to="/">
        <h1 className="text-4xl ml-10 text-white font-bold">WatherWell.md</h1>
        </Link>
        </div>
        <div className="self-center">
        <Link to="/about">
        <button className="px-8 text-2xl text-white">About</button>
        </Link>
        <Link to="/Inregistrarea">
        <button className="px-8 text-2xl text-white">Inregistrarea</button>
        </Link>
        {/* <Link to="/lista-de-fintini">
        <button className="px-8 text-2xl text-white">Lista de Fântâni</button>
        </Link> */}
        <Link to="/Contacts">
        <button className="px-8 text-2xl text-white">Contacts</button>
        </Link>
        
        </div>
        <div className="self-center pr-20">
        <img src={WellImag} alt="Well" />
        </div>
    </div>
    

    )
}

export default Header