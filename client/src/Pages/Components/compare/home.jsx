import compareStyle from '../../../Assets/styles/compare.module.css';

export function Home({route}) {
    let heading = '';
    switch (route) {
        case 0:
            heading = 'Explore the Categories';
            break;
        case 1:
            heading = 'Find Jobs';
            break;
        case 2:
            heading = 'Bookmark section ';
            break;
        case 3:
            heading = 'Upcoming Exams this month !';
            break;
        case 4:
            heading = "Applied Jobs ";
            break;
    }
    return (<div className={compareStyle.home}>
        <div className={compareStyle.max_width}>
            <div className={compareStyle.exContainer}>
                <div className={compareStyle.exLeft}>
                    <div className={compareStyle.exLeftContainer}>
                        <div className={compareStyle.h_heading}>
                            {heading}
                        </div>
                        <div className={compareStyle.mobileBar}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.66667 21.6667C7.58714 21.6667 8.33333 20.9205 8.33333 20C8.33333 19.0795 7.58714 18.3333 6.66667 18.3333C5.74619 18.3333 5 19.0795 5 20C5 20.9205 5.74619 21.6667 6.66667 21.6667Z"
                                    fill="black" fillOpacity="0.8"/>
                                <path
                                    d="M33.4332 18.3333H13.2332C12.3679 18.3333 11.6665 19.0348 11.6665 19.9V20.1C11.6665 20.9653 12.3679 21.6667 13.2332 21.6667H33.4332C34.2984 21.6667 34.9998 20.9653 34.9998 20.1V19.9C34.9998 19.0348 34.2984 18.3333 33.4332 18.3333Z"
                                    fill="black" fillOpacity="0.8"/>
                                <path
                                    d="M33.4333 26.6667H6.56667C5.70142 26.6667 5 27.3681 5 28.2333V28.4333C5 29.2986 5.70142 30 6.56667 30H33.4333C34.2986 30 35 29.2986 35 28.4333V28.2333C35 27.3681 34.2986 26.6667 33.4333 26.6667Z"
                                    fill="black" fillOpacity="0.8"/>
                                <path
                                    d="M33.4333 10H6.56667C5.70142 10 5 10.7014 5 11.5667V11.7667C5 12.6319 5.70142 13.3333 6.56667 13.3333H33.4333C34.2986 13.3333 35 12.6319 35 11.7667V11.5667C35 10.7014 34.2986 10 33.4333 10Z"
                                    fill="black" fillOpacity="0.8"/>
                            </svg>
                        </div>
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