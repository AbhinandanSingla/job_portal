import compareStyle from '../Assets/styles/compare.module.css';
import {Navbar} from "./Components/compare/navbar";
import {Home} from "./Components/compare/home";
import {CompareContainer} from "./Components/compare/compareContainer";

export function Compare() {
    return (
        <section className={compareStyle.root}>
            <Navbar/>
            <Home/>
            <CompareContainer/>
        </section>
    );
}