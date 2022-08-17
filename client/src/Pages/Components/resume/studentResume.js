import './studentResume.css'

function StudentResume(props) {
    return (<section className={'studentResume'}>
        <div className="max-width">
            <div className="leftPage">
                <div className="resumeHead">
                    <div className='resumeHeading'>
                        Abhinandan Singla
                    </div>
                    <div className="resumeTitle">
                        Software Engineer
                    </div>
                </div>
                <div className="contactDetail">
                    <div className="headTitle">
                        Contact
                    </div>
                    <div className="address">
                        <div className="singleCol">
                            <div className="navHead">
                                Address
                            </div>
                            <div className="navValue">
                                Patran
                            </div>

                        </div>
                    </div>
                    <div className="phone">
                        <div className="singleCol">
                            <div className="navHead">
                                Phone
                            </div>
                            <div className="navValue">
                                9779204835
                            </div>

                        </div>
                    </div>
                    <div className="email">
                        <div className="singleCol">
                            <div className="navHead">
                                Email
                            </div>
                            <div className="navValue">
                                deepusingla0448@gmail.com
                            </div>

                        </div>
                    </div>
                </div>
                <div className="skillsDetail">
                    <div className="headTitle">
                        Skills
                    </div>
                    <ul>
                        <li className="skill_item">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                        <li className="skill_item">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                        <li className="skill_item">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                        <li className="skill_item">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                        <li className="skill_item">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                    </ul>
                </div>
            </div>
            <div className="rightPage">
                <div className="professionalSummary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis maiores quos veniam! Dicta dolor
                    error ipsam modi ratione rerum sequi. Ab ad eius ex facilis itaque, nam perspiciatis unde veritatis!
                    Atque illum labore maiores?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure non obcaecati perferendis.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus architecto asperiores aspernatur commodi cupiditate dignissimos dolores earum esse est explicabo fuga harum ipsam ipsum molestiae nam natus nesciunt nostrum provident quidem quod, ratione sint, sit sunt ullam veniam voluptatum! Asperiores itaque molestias natus voluptatem?
                </div>
                <section className="education">
                    <div className="sectionHeading">
                        Education
                    </div>
                </section>
            </div>
        </div>
    </section>);
}

export default StudentResume;