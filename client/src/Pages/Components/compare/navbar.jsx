import compareStyle from '../../../Assets/styles/compare.module.css';

export function Navbar({changeRoute}) {
    return (<div className={compareStyle.navbar}>
            <div className={compareStyle.max_width}>
                <div className={compareStyle.navTop}>
                    <div className={compareStyle.nav_logo}>LOGO</div>
                    <ul>
                        <li className={`${compareStyle.navs} ${compareStyle.selected}`} id="categories">
                            <i className="fas fa-search"></i>
                            <span>Categories</span></li>
                        <li className={compareStyle.navs} id="findWork">
                            <i className="fas fa-search"></i>
                            <span>Find Work</span>
                        </li>
                        <li className={compareStyle.navs} id="bookmark">
                            <i className="far fa-bookmark"></i>
                            <span>Bookmark</span>
                        </li>
                        <li className={compareStyle.navs} id="guidance">
                            <i className="fal fa-envelope"></i>
                            <span>Guidance</span>
                        </li>
                    </ul>
                </div>

                <div className={compareStyle.nav_logout}>
                    <i className="far fa-sign-out"></i>
                    <span>Log out</span></div>
            </div>
        </div>
    );
}