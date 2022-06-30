export function Footer(){
    return(<section className="footer">
            <div className="navbar">
                <div className="footnav">
                    ROZGAR
                </div>
                <ul className="navsContainer">
                    <li className="navs">Home</li>
                    <li className="navs">Category</li>
                    <li className="navs">Explore</li>
                    <li className="navs">Post a job</li>
                </ul>
            </div>
            <div className="footerContainer">
                <div className="footerHeading">
                    Find your dream
                    <br/>
                    job here
                </div>
                <div className="footerJob">
                    <ul>
                        <li className="jobNav jobHead">
                            Get a job
                        </li>
                        <li className="jobNav">
                            Create account
                        </li>
                        <li className="jobNav">
                            Search job
                        </li>
                        <li className="jobNav">
                            Make a deal
                        </li>

                    </ul>
                </div>
                <div className="footerJob">
                    <ul>
                        <li className="jobNav jobHead">
                            Support
                        </li>
                        <li className="jobNav">
                            Customer services
                        </li>
                        <li className="jobNav">
                            Email us
                        </li>
                        <li className="jobNav">
                            Privacy policy
                        </li>
                        <li className="jobNav">
                            Terms and conditions
                        </li>

                    </ul>
                </div>

            </div>
        </section>
    );
}