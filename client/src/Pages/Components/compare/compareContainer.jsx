import compareStyle from '../../../Assets/styles/compare.module.css';
import {gsap} from "gsap";
import {useEffect, useRef} from "react";

export function CompareContainer() {
    const boxRef = useRef();
    const q = gsap.utils.selector(boxRef);
    const tl = useRef();
    useEffect(() => {
        tl.current = gsap.timeline({
            stagger: 0.5
        }).fromTo(q('.categoryCard'), {
            y: 100, stagger: 0.8

        }, {
            y: 0, stagger: 0.2

        })
    });
    return (<div className={compareStyle.categoryContainer} ref={boxRef}>
            <div className={`${compareStyle.categoryCard} categoryCard`}>
                <svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M26.2897 2.30249H6.7103C4.11495 2.30249 2 4.30563 2 6.76377V16.219C2 18.6827 4.11495 20.6803 6.7103 20.6803H15.1818V22.8055H12.276C11.5495 22.8055 10.9578 23.3659 10.9578 24.054C10.9578 24.7421 11.5495 25.3025 12.276 25.3025H20.724C21.4505 25.3025 22.0422 24.7421 22.0422 24.054C22.0422 23.3659 21.4505 22.8055 20.724 22.8055H17.8182V20.6803H26.2897C28.8909 20.6803 31 18.6772 31 16.219V6.76377C31 4.30563 28.885 2.30249 26.2897 2.30249ZM6.7103 4.79947H26.2838C27.4321 4.79947 28.3636 5.68174 28.3636 6.76377V13.2226H4.63636V6.76377C4.63636 5.68174 5.56788 4.79947 6.7103 4.79947ZM26.2897 18.1889H6.7103C5.56788 18.1889 4.63636 17.3066 4.63636 16.2246V15.7252H28.3636V16.2246C28.3636 17.3066 27.4321 18.1889 26.2897 18.1889Z"
                        fill="#8B8B8B"/>
                </svg>
                <div className={compareStyle.categoryHeading}>
                    Category 1
                </div>
                <div className={compareStyle.categorySubHeading}>
                    do web, mobile, desktop and other programming
                </div>
                <div className={compareStyle.cc_btn}>
                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 9.30249H20M20 9.30249L13.3333 1.30249M20 9.30249L13.3333 17.3025" stroke="white"
                              stroke-width="2"/>
                    </svg>
                </div>
            </div>
            <div className={`${compareStyle.categoryCard} categoryCard`}>
                <svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M26.2897 2.30249H6.7103C4.11495 2.30249 2 4.30563 2 6.76377V16.219C2 18.6827 4.11495 20.6803 6.7103 20.6803H15.1818V22.8055H12.276C11.5495 22.8055 10.9578 23.3659 10.9578 24.054C10.9578 24.7421 11.5495 25.3025 12.276 25.3025H20.724C21.4505 25.3025 22.0422 24.7421 22.0422 24.054C22.0422 23.3659 21.4505 22.8055 20.724 22.8055H17.8182V20.6803H26.2897C28.8909 20.6803 31 18.6772 31 16.219V6.76377C31 4.30563 28.885 2.30249 26.2897 2.30249ZM6.7103 4.79947H26.2838C27.4321 4.79947 28.3636 5.68174 28.3636 6.76377V13.2226H4.63636V6.76377C4.63636 5.68174 5.56788 4.79947 6.7103 4.79947ZM26.2897 18.1889H6.7103C5.56788 18.1889 4.63636 17.3066 4.63636 16.2246V15.7252H28.3636V16.2246C28.3636 17.3066 27.4321 18.1889 26.2897 18.1889Z"
                        fill="#8B8B8B"/>
                </svg>
                <div className={compareStyle.categoryHeading}>
                    Category 1
                </div>
                <div className={compareStyle.categorySubHeading}>
                    do web, mobile, desktop and other programming
                </div>
                <div className={compareStyle.cc_btn}>
                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 9.30249H20M20 9.30249L13.3333 1.30249M20 9.30249L13.3333 17.3025" stroke="white"
                              stroke-width="2"/>
                    </svg>
                </div>
            </div>
            <div className={`${compareStyle.categoryCard} categoryCard`}>
                <svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M26.2897 2.30249H6.7103C4.11495 2.30249 2 4.30563 2 6.76377V16.219C2 18.6827 4.11495 20.6803 6.7103 20.6803H15.1818V22.8055H12.276C11.5495 22.8055 10.9578 23.3659 10.9578 24.054C10.9578 24.7421 11.5495 25.3025 12.276 25.3025H20.724C21.4505 25.3025 22.0422 24.7421 22.0422 24.054C22.0422 23.3659 21.4505 22.8055 20.724 22.8055H17.8182V20.6803H26.2897C28.8909 20.6803 31 18.6772 31 16.219V6.76377C31 4.30563 28.885 2.30249 26.2897 2.30249ZM6.7103 4.79947H26.2838C27.4321 4.79947 28.3636 5.68174 28.3636 6.76377V13.2226H4.63636V6.76377C4.63636 5.68174 5.56788 4.79947 6.7103 4.79947ZM26.2897 18.1889H6.7103C5.56788 18.1889 4.63636 17.3066 4.63636 16.2246V15.7252H28.3636V16.2246C28.3636 17.3066 27.4321 18.1889 26.2897 18.1889Z"
                        fill="#8B8B8B"/>
                </svg>
                <div className={compareStyle.categoryHeading}>
                    Category 1
                </div>
                <div className={compareStyle.categorySubHeading}>
                    do web, mobile, desktop and other programming
                </div>
                <div className={compareStyle.cc_btn}>
                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 9.30249H20M20 9.30249L13.3333 1.30249M20 9.30249L13.3333 17.3025" stroke="white"
                              stroke-width="2"/>
                    </svg>
                </div>
            </div>
            <div className={`${compareStyle.categoryCard} categoryCard`}>
                <svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M26.2897 2.30249H6.7103C4.11495 2.30249 2 4.30563 2 6.76377V16.219C2 18.6827 4.11495 20.6803 6.7103 20.6803H15.1818V22.8055H12.276C11.5495 22.8055 10.9578 23.3659 10.9578 24.054C10.9578 24.7421 11.5495 25.3025 12.276 25.3025H20.724C21.4505 25.3025 22.0422 24.7421 22.0422 24.054C22.0422 23.3659 21.4505 22.8055 20.724 22.8055H17.8182V20.6803H26.2897C28.8909 20.6803 31 18.6772 31 16.219V6.76377C31 4.30563 28.885 2.30249 26.2897 2.30249ZM6.7103 4.79947H26.2838C27.4321 4.79947 28.3636 5.68174 28.3636 6.76377V13.2226H4.63636V6.76377C4.63636 5.68174 5.56788 4.79947 6.7103 4.79947ZM26.2897 18.1889H6.7103C5.56788 18.1889 4.63636 17.3066 4.63636 16.2246V15.7252H28.3636V16.2246C28.3636 17.3066 27.4321 18.1889 26.2897 18.1889Z"
                        fill="#8B8B8B"/>
                </svg>
                <div className={compareStyle.categoryHeading}>
                    Category 1
                </div>
                <div className={compareStyle.categorySubHeading}>
                    do web, mobile, desktop and other programming
                </div>
                <div className={compareStyle.cc_btn}>
                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 9.30249H20M20 9.30249L13.3333 1.30249M20 9.30249L13.3333 17.3025" stroke="white"
                              stroke-width="2"/>
                    </svg>
                </div>
            </div>
            <div className={`${compareStyle.categoryCard} categoryCard`}>
                <svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M26.2897 2.30249H6.7103C4.11495 2.30249 2 4.30563 2 6.76377V16.219C2 18.6827 4.11495 20.6803 6.7103 20.6803H15.1818V22.8055H12.276C11.5495 22.8055 10.9578 23.3659 10.9578 24.054C10.9578 24.7421 11.5495 25.3025 12.276 25.3025H20.724C21.4505 25.3025 22.0422 24.7421 22.0422 24.054C22.0422 23.3659 21.4505 22.8055 20.724 22.8055H17.8182V20.6803H26.2897C28.8909 20.6803 31 18.6772 31 16.219V6.76377C31 4.30563 28.885 2.30249 26.2897 2.30249ZM6.7103 4.79947H26.2838C27.4321 4.79947 28.3636 5.68174 28.3636 6.76377V13.2226H4.63636V6.76377C4.63636 5.68174 5.56788 4.79947 6.7103 4.79947ZM26.2897 18.1889H6.7103C5.56788 18.1889 4.63636 17.3066 4.63636 16.2246V15.7252H28.3636V16.2246C28.3636 17.3066 27.4321 18.1889 26.2897 18.1889Z"
                        fill="#8B8B8B"/>
                </svg>
                <div className={compareStyle.categoryHeading}>
                    Category 1
                </div>
                <div className={compareStyle.categorySubHeading}>
                    do web, mobile, desktop and other programming
                </div>
                <div className={compareStyle.cc_btn}>
                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 9.30249H20M20 9.30249L13.3333 1.30249M20 9.30249L13.3333 17.3025" stroke="white"
                              stroke-width="2"/>
                    </svg>
                </div>
            </div>
            <div className={`${compareStyle.categoryCard} categoryCard`}>
                <svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M26.2897 2.30249H6.7103C4.11495 2.30249 2 4.30563 2 6.76377V16.219C2 18.6827 4.11495 20.6803 6.7103 20.6803H15.1818V22.8055H12.276C11.5495 22.8055 10.9578 23.3659 10.9578 24.054C10.9578 24.7421 11.5495 25.3025 12.276 25.3025H20.724C21.4505 25.3025 22.0422 24.7421 22.0422 24.054C22.0422 23.3659 21.4505 22.8055 20.724 22.8055H17.8182V20.6803H26.2897C28.8909 20.6803 31 18.6772 31 16.219V6.76377C31 4.30563 28.885 2.30249 26.2897 2.30249ZM6.7103 4.79947H26.2838C27.4321 4.79947 28.3636 5.68174 28.3636 6.76377V13.2226H4.63636V6.76377C4.63636 5.68174 5.56788 4.79947 6.7103 4.79947ZM26.2897 18.1889H6.7103C5.56788 18.1889 4.63636 17.3066 4.63636 16.2246V15.7252H28.3636V16.2246C28.3636 17.3066 27.4321 18.1889 26.2897 18.1889Z"
                        fill="#8B8B8B"/>
                </svg>
                <div className={compareStyle.categoryHeading}>
                    Category 1
                </div>
                <div className={compareStyle.categorySubHeading}>
                    do web, mobile, desktop and other programming
                </div>
                <div className={compareStyle.cc_btn}>
                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 9.30249H20M20 9.30249L13.3333 1.30249M20 9.30249L13.3333 17.3025" stroke="white"
                              stroke-width="2"/>
                    </svg>
                </div>
            </div>
            <div className={`${compareStyle.categoryCard} categoryCard`}>
                <svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M26.2897 2.30249H6.7103C4.11495 2.30249 2 4.30563 2 6.76377V16.219C2 18.6827 4.11495 20.6803 6.7103 20.6803H15.1818V22.8055H12.276C11.5495 22.8055 10.9578 23.3659 10.9578 24.054C10.9578 24.7421 11.5495 25.3025 12.276 25.3025H20.724C21.4505 25.3025 22.0422 24.7421 22.0422 24.054C22.0422 23.3659 21.4505 22.8055 20.724 22.8055H17.8182V20.6803H26.2897C28.8909 20.6803 31 18.6772 31 16.219V6.76377C31 4.30563 28.885 2.30249 26.2897 2.30249ZM6.7103 4.79947H26.2838C27.4321 4.79947 28.3636 5.68174 28.3636 6.76377V13.2226H4.63636V6.76377C4.63636 5.68174 5.56788 4.79947 6.7103 4.79947ZM26.2897 18.1889H6.7103C5.56788 18.1889 4.63636 17.3066 4.63636 16.2246V15.7252H28.3636V16.2246C28.3636 17.3066 27.4321 18.1889 26.2897 18.1889Z"
                        fill="#8B8B8B"/>
                </svg>
                <div className={compareStyle.categoryHeading}>
                    Category 1
                </div>
                <div className={compareStyle.categorySubHeading}>
                    do web, mobile, desktop and other programming
                </div>
                <div className={compareStyle.cc_btn}>
                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 9.30249H20M20 9.30249L13.3333 1.30249M20 9.30249L13.3333 17.3025" stroke="white"
                              stroke-width="2"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}