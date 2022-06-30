import '../Assets/styles/style.css';
import {Navbar} from "./Components/home/Navbar";
import {LandingPage} from "./Components/home/landingPage";
import {ExporeCategory} from "./Components/home/exporeCategory";
import {Steps} from "./Components/home/steps";
import {PopularJobs} from "./Components/home/popularJobs";
import {News} from "./Components/home/news";
import {Footer} from "./Components/home/footer";

export function Home() {
    return (<>
        <Navbar/>
        <LandingPage/>
        <ExporeCategory/>
        <Steps/>
        <PopularJobs/>
        <News/>
        <Footer/>
    </>);
}