import homeStyle from '../../../Assets/styles/style.module.css';

export function News() {
    return (<section className={homeStyle.news}>
            <div className={homeStyle.max_width}>
                <div className={homeStyle.news_heading}>
                    Subs Our Newsletter
                    <br/>
                    for Daily Update
                </div>
                <div className={homeStyle.news_bar}>
                    <input type="text" placeholder="Your email address here"/>
                    <div className={homeStyle.nb_sub}>Subscribe</div>
                </div>
            </div>
        </section>
    );
}