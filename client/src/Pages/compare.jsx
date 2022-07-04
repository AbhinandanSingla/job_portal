import compareStyle from '../Assets/styles/compare.module.css';
import {Navbar} from "./Components/compare/navbar";
import {Home} from "./Components/compare/home";
import {CompareContainer} from "./Components/compare/compareContainer";
import {useState} from "react";

export function Compare() {
    const [navRoute, setRoute] = useState(0);
    return (
        <section className={compareStyle.root}>
            <Navbar changeRoute={setRoute}/>
            <Home/>
            <CompareContainer/>
        </section>
    );
}