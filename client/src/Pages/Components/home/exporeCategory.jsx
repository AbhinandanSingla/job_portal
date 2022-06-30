import homeStyle from '../../../Assets/styles/style.module.css';

export function ExporeCategory() {
    return (<section>
            <div>
                <div className={homeStyle.ec_contents}>
                    <div className={homeStyle.ec_main_heading} data-aos="fade-right">
                        Explore by
                        <br/>
                        category
                    </div>
                    <div className={homeStyle.ec_sub_heading} data-aos="fade-right">
                        Find your dream job according to your skills based on the categories
                        below
                    </div>
                    <div className={homeStyle.ec_allCat} data-aos="fade-left">
                        See all
                        <br/>
                        category here
                    </div>
                </div>
                <div className={homeStyle.ec_categoryContainer} data-aos="fade-up">
                    <div className={homeStyle.ec_dec}>
                        <div className={homeStyle.ec_dec_card}></div>
                        <div className={homeStyle.ec_dec_card}></div>
                        <div className={homeStyle.ec_dec_card}></div>
                        <div className={homeStyle.ec_dec_card}></div>
                    </div>
                    <div className={homeStyle.ec_card}>
                        <svg
                            width="33"
                            height="27"
                            viewBox="0 0 33 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M26.2897 2H6.7103C4.11495 2 2 4.00314 2 6.46128V15.9165C2 18.3802 4.11495 20.3778 6.7103 20.3778H15.1818V22.503H12.276C11.5495 22.503 10.9578 23.0634 10.9578 23.7515C10.9578 24.4396 11.5495 25 12.276 25H20.724C21.4505 25 22.0422 24.4396 22.0422 23.7515C22.0422 23.0634 21.4505 22.503 20.724 22.503H17.8182V20.3778H26.2897C28.8909 20.3778 31 18.3747 31 15.9165V6.46128C31 4.00314 28.885 2 26.2897 2ZM6.7103 4.49698H26.2838C27.4321 4.49698 28.3636 5.37925 28.3636 6.46128V12.9201H4.63636V6.46128C4.63636 5.37925 5.56788 4.49698 6.7103 4.49698ZM26.2897 17.8864H6.7103C5.56788 17.8864 4.63636 17.0041 4.63636 15.9221V15.4227H28.3636V15.9221C28.3636 17.0041 27.4321 17.8864 26.2897 17.8864Z"
                                fill="#8B8B8B"
                            ></path>
                        </svg>
                        <div className={homeStyle.ec_heading}>Category 1</div>
                        <div className={homeStyle.ec_Sub}>do web, mobile, desktop and other programming</div>
                        <div className={homeStyle.ec_btn}>
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                    <div className={homeStyle.ec_card}>
                        <svg
                            width="33"
                            height="27"
                            viewBox="0 0 33 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M26.2897 2H6.7103C4.11495 2 2 4.00314 2 6.46128V15.9165C2 18.3802 4.11495 20.3778 6.7103 20.3778H15.1818V22.503H12.276C11.5495 22.503 10.9578 23.0634 10.9578 23.7515C10.9578 24.4396 11.5495 25 12.276 25H20.724C21.4505 25 22.0422 24.4396 22.0422 23.7515C22.0422 23.0634 21.4505 22.503 20.724 22.503H17.8182V20.3778H26.2897C28.8909 20.3778 31 18.3747 31 15.9165V6.46128C31 4.00314 28.885 2 26.2897 2ZM6.7103 4.49698H26.2838C27.4321 4.49698 28.3636 5.37925 28.3636 6.46128V12.9201H4.63636V6.46128C4.63636 5.37925 5.56788 4.49698 6.7103 4.49698ZM26.2897 17.8864H6.7103C5.56788 17.8864 4.63636 17.0041 4.63636 15.9221V15.4227H28.3636V15.9221C28.3636 17.0041 27.4321 17.8864 26.2897 17.8864Z"
                                fill="#8B8B8B"
                            ></path>
                        </svg>
                        <div className={homeStyle.ec_heading}>Category 1</div>
                        <div className={homeStyle.ec_Sub}>do web, mobile, desktop and other programming</div>
                        <div className={homeStyle.ec_btn}>
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                    <div className={homeStyle.ec_card}>
                        <svg
                            width="33"
                            height="27"
                            viewBox="0 0 33 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M26.2897 2H6.7103C4.11495 2 2 4.00314 2 6.46128V15.9165C2 18.3802 4.11495 20.3778 6.7103 20.3778H15.1818V22.503H12.276C11.5495 22.503 10.9578 23.0634 10.9578 23.7515C10.9578 24.4396 11.5495 25 12.276 25H20.724C21.4505 25 22.0422 24.4396 22.0422 23.7515C22.0422 23.0634 21.4505 22.503 20.724 22.503H17.8182V20.3778H26.2897C28.8909 20.3778 31 18.3747 31 15.9165V6.46128C31 4.00314 28.885 2 26.2897 2ZM6.7103 4.49698H26.2838C27.4321 4.49698 28.3636 5.37925 28.3636 6.46128V12.9201H4.63636V6.46128C4.63636 5.37925 5.56788 4.49698 6.7103 4.49698ZM26.2897 17.8864H6.7103C5.56788 17.8864 4.63636 17.0041 4.63636 15.9221V15.4227H28.3636V15.9221C28.3636 17.0041 27.4321 17.8864 26.2897 17.8864Z"
                                fill="#8B8B8B"
                            ></path>
                        </svg>
                        <div className={homeStyle.ec_heading}>Category 1</div>
                        <div className={homeStyle.ec_Sub}>do web, mobile, desktop and other programming</div>
                        <div className={homeStyle.ec_btn}>
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                    <div className={homeStyle.ec_card}>
                        <svg
                            width="33"
                            height="27"
                            viewBox="0 0 33 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M26.2897 2H6.7103C4.11495 2 2 4.00314 2 6.46128V15.9165C2 18.3802 4.11495 20.3778 6.7103 20.3778H15.1818V22.503H12.276C11.5495 22.503 10.9578 23.0634 10.9578 23.7515C10.9578 24.4396 11.5495 25 12.276 25H20.724C21.4505 25 22.0422 24.4396 22.0422 23.7515C22.0422 23.0634 21.4505 22.503 20.724 22.503H17.8182V20.3778H26.2897C28.8909 20.3778 31 18.3747 31 15.9165V6.46128C31 4.00314 28.885 2 26.2897 2ZM6.7103 4.49698H26.2838C27.4321 4.49698 28.3636 5.37925 28.3636 6.46128V12.9201H4.63636V6.46128C4.63636 5.37925 5.56788 4.49698 6.7103 4.49698ZM26.2897 17.8864H6.7103C5.56788 17.8864 4.63636 17.0041 4.63636 15.9221V15.4227H28.3636V15.9221C28.3636 17.0041 27.4321 17.8864 26.2897 17.8864Z"
                                fill="#8B8B8B"
                            ></path>
                        </svg>
                        <div className={homeStyle.ec_heading}>Category 1</div>
                        <div className={homeStyle.ec_Sub}>do web, mobile, desktop and other programming</div>
                        <div className={homeStyle.ec_btn}>
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}