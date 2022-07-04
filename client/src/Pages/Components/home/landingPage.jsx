import homeStyle from '../../../Assets/styles/style.module.css';
import '../../../Assets/styles/style.module.css';
import homeImg from "../../../Assets/Images/landingPage/home.jpg";
import img1 from "../../../Assets/Images/landingPage/img1.png";
import img2 from "../../../Assets/Images/landingPage/img2.png";

export function LandingPage() {
    return (<section className={homeStyle.home}>
            <div className={homeStyle.max_width}>
                <div className={homeStyle.home_content}>
                    <div
                        className={homeStyle.h_main_heading}
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        Find your
                        <span className={homeStyle.break}>
                            &nbsp;dream job&nbsp;
                        </span>
                        here
                    </div>
                    <div className={homeStyle.h_sub_heading} data-aos="fade-up">
                        Doing a job that is loved and paid for is everyone's dream.
                        find your dream job here
                    </div>
                    <div className={homeStyle.h_btns}>
                        <div className={homeStyle.btn}>Find a job</div>
                        <div className={homeStyle.h_postJob}>Post job</div>
                    </div>
                </div>
                <div className={homeStyle.h_side}>
                    <img src={homeImg} alt="" className={homeStyle.h_img}/>
                    <div className={homeStyle.h_imgContainer}>
                        <div className={homeStyle.hi1}>
                            20K+
                            <span>
                                People got hired
                            </span>
                        </div>
                        <div className={`${homeStyle.hi} ${homeStyle.hi2}`}>
                            <img src={img1} alt=""/>
                            <div className="hiContainer">
                                <div className={homeStyle.hiLabel}>
                                    Web Designer
                                </div>
                                <div className={homeStyle.hiSubheading}>
                                    Ibey Agency
                                </div>
                            </div>
                            <div className={homeStyle.hiApply}>Apply</div>
                        </div>
                        <div className={`${homeStyle.hi} ${homeStyle.hi3}`}>
                            <img src={img2} alt=""/>
                            <div className={homeStyle.hiContainer}>
                                <div className={homeStyle.hiLabel}>
                                    Icon Designer
                                </div>
                                <div className={homeStyle.hiSubheading}>
                                    Denie Studio
                                </div>
                            </div>
                            <div className={homeStyle.hiApply}>Apply</div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}