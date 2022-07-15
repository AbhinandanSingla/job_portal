import compareStyle from '../Assets/styles/compare.module.css';
import {Navbar} from "./Components/compare/navbar";
import {Home} from "./Components/compare/home";
import {CompareContainer} from "./Components/compare/compareContainer";
import {useState} from "react";
import {FindWorkContainer} from "./Components/compare/findWorkContainer";
import {BookContainer} from "./Components/compare/bookContainer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Guideline} from "./Components/compare/guideline"; // You can also use <link> for styles
AOS.init();

export function Compare() {
    const [navRoute, setRoute] = useState(0);

    function switchComponent() {
        switch (navRoute) {
            case 0 :
                return <CompareContainer/>;
            case 1:
                return <FindWorkContainer/>;
            case 2:
                return <BookContainer/>;
            case 3:
                return <Guideline/>;
        }
    }

    return (
        <section className={compareStyle.root}>
            <Navbar changeRoute={setRoute} navRoute={navRoute}/>
            <Home route={navRoute}/>
            {switchComponent()}
        </section>
    );
}