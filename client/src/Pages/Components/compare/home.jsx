import compareStyle from '../../../Assets/styles/compare.module.css';

export function Home() {
    return (<div className={compareStyle.home}>
        <div className={compareStyle.max_width}>
            <div className={compareStyle.exContainer}>
                <div className={compareStyle.exLeft}>
                    <div className={compareStyle.h_heading}>
                        Explore the Categories
                    </div>
                    <div className={compareStyle.searchBarContainer}>
                        <div className={compareStyle.searchBar}>
                            <i className="fas fa-search"/>
                            <input type="text"
                                   placeholder="Search by company, job title keyword"/>
                            <i className={`fas fa-sliders-h ${compareStyle.h_sort}`}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={compareStyle.hc_heading}>Here, we <span>found</span> your job!</div>
        </div>
    </div>);
}