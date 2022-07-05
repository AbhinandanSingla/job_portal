import compareStyle from '../../../Assets/styles/compare.module.css';

export function Navbar({navRoute, changeRoute}) {
    function highlightRoute(index) {
        return navRoute === index ? compareStyle.selected : ''
    }

    return (<div className={compareStyle.navbar}>
            <div className={compareStyle.max_width}>
                <div className={compareStyle.navTop}>
                    <div className={compareStyle.nav_logo}>LOGO</div>
                    <ul>
                        <li className={`${compareStyle.navs} ${highlightRoute(0)} `}
                            id="categories"
                            onClick={() => changeRoute(0)}>
                            <i className="fas fa-search"></i>
                            <span>Categories</span></li>
                        <li className={`${compareStyle.navs} ${highlightRoute(1)}`} onClick={() => changeRoute(1)}
                            id="findWork">
                            <i className="fas fa-search"></i>
                            <span>Find Work</span>
                        </li>
                        <li className={`${compareStyle.navs} ${highlightRoute(2)}`} id="bookmark"
                            onClick={() => changeRoute(2)}>
                            <i className="far fa-bookmark"></i>
                            <span>Bookmark</span>
                        </li>
                        <li className={compareStyle.navs} id="guidance" onClick={() => changeRoute(3)}>
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