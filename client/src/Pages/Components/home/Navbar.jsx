import logo from '../../../Assets/Images/landingPage/logo.jpeg';
export function Navbar() {
    return (<section className="navbar">
            <div className="max-width">
                <div className="nav-logo">
                    <img src={logo} alt="Logo"/>
                </div>
                <ul className="navsContainer">
                    <li className="navs">Home</li>
                    <li className="navs"><a href="/compare"> Category</a></li>
                    <li className="navs">Post a job</li>
                    2
                    <li className="navs">Contact</li>
                    <li className="btn navs">Create Account</li>
                </ul>
            </div>
        </section>
    );
}