import homeStyle from '../../../Assets/styles/style.module.css';

export function Footer() {
    return (<section className={homeStyle.footer}>
            <div>
                <div className={homeStyle.footnav}>
                    ROZGAR
                </div>
                <ul className={homeStyle.navsContainer}>
                    <li className={homeStyle.navs}>Home</li>
                    <li className={homeStyle.navs}>Category</li>
                    <li className={homeStyle.navs}>Explore</li>
                    <li className={homeStyle.navs}>Post a job</li>
                </ul>
            </div>
            <div className={homeStyle.footerContainer}>
                <div className={homeStyle.footerHeading}>
                    Find your dream
                    <br/>
                    job here
                </div>
                <div>
                    <ul>
                        <li className={`${homeStyle.jobNav}  ${homeStyle.jobHead}`}>
                            Get a job
                        </li>
                        <li className={homeStyle.jobNav}>
                            Create account
                        </li>
                        <li className={homeStyle.jobNav}>
                            Search job
                        </li>
                        <li className={homeStyle.jobNav}>
                            Make a deal
                        </li>

                    </ul>
                </div>
                <div className="footerJob">
                    <ul>
                        <li className={`${homeStyle.jobNav} ${homeStyle.jobHead}`}>
                            Support
                        </li>
                        <li className={homeStyle.jobNav}>
                            Customer services
                        </li>
                        <li className={homeStyle.jobNav}>
                            Email us
                        </li>
                        <li className={homeStyle.jobNav}>
                            Privacy policy
                        </li>
                        <li className={homeStyle.jobNav}>
                            Terms and conditions
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
}