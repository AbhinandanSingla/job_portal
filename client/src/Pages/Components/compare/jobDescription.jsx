import compareStyle from "../../../Assets/styles/compare.module.css";
import {useEffect} from "react";
import {useQuery} from "@apollo/client";
import {getJobDescription} from "../../../graphql/queries";

export function JobDescription({jobID}) {
    const {data} = useQuery(getJobDescription, {
        variables: {
            id: jobID
        }
    });
    useEffect(() => {
        console.log(data)
    })
    return ((data) ? <div className={compareStyle.fwc}
                          style={{display: "block", height: "75vh"}}>
            <div className={compareStyle.j_heading}>Detail job</div>
            <svg width="273" height="216" viewBox="0 0 273 216" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <rect width="273" height="216" rx="16" fill="#E0E4F0"/>
            </svg>
            <div className={compareStyle.j_company}>
                {data.jobDesc.companyName}
            </div>
            <div className={compareStyle.j_type}>
                {data.jobDesc.jobTitle}
            </div>
            <div className={compareStyle.profile_line}>
            </div>

            <div className={compareStyle.miniQual}>Minimum qualification</div>
            <div className={compareStyle.miniQualContainer}>
                <ul>
                    {
                        data.jobDesc.Qualifications.map((value => <li>
                            {value}
                        </li>))
                    }
                </ul>
            </div>
            <div className={compareStyle.j_desc_heading}>
                Description
            </div>
            <div className={compareStyle.j_desc}>
                {data.jobDesc.jobDescription}
            </div>
            <div className={compareStyle.fieldContainer}>
                <div className={compareStyle.j_field}>
                    <div className={compareStyle.j_label}>
                        Sallary
                    </div>
                    <div className={compareStyle.j_value}>
                        ₹10,000/a month
                    </div>
                </div>
                <div className={compareStyle.j_field}>
                    <div className={compareStyle.j_label}>
                        Sallary
                    </div>
                    <div className={compareStyle.j_value}>
                        ₹10,000/a month
                    </div>
                </div>
                <div className={compareStyle.j_field}>
                    <div className={compareStyle.j_label}>
                        Sallary
                    </div>
                    <div className={compareStyle.j_value}>
                        ₹10,000/a month
                    </div>
                </div>
                <div className={compareStyle.j_field}>
                    <div className={compareStyle.j_label}>
                        Sallary
                    </div>
                    <div className={compareStyle.j_value}>
                        ₹10,000/a month
                    </div>
                </div>
            </div>

            <div className={compareStyle.j_btn}>
                <div className={compareStyle.j_apply_btn}>
                    Apply Now
                </div>
                <div className={compareStyle.j_message}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="12" fill="#F2F8F1"/>
                        <path
                            d="M30.2215 15.8188C29.7197 14.6833 28.9896 13.6512 28.0719 12.78C27.157 11.9074 26.0702 11.2135 24.8732 10.738C23.647 10.2484 22.3295 9.99745 20.999 10H20.9542C19.6009 10.0064 18.2924 10.2608 17.0598 10.7613C15.8731 11.2418 14.7965 11.9368 13.8902 12.8076C12.9815 13.6768 12.2597 14.7053 11.7652 15.8357C11.2519 17.0113 10.9918 18.2723 11.0002 19.5445C11.0069 21.0162 11.3782 22.4772 12.0717 23.7835V27.0067C12.0717 27.5453 12.5324 27.9821 13.0984 27.9821H16.4939C17.8783 28.6444 19.4059 28.9928 20.9565 29H21.0034C22.3411 29 23.6362 28.754 24.8575 28.2727C26.0485 27.8027 27.1312 27.117 28.0451 26.2539C28.9666 25.3866 29.6914 24.373 30.1991 23.2428C30.7248 22.0722 30.9932 20.8275 30.9999 19.5424C31.0044 18.251 30.7405 16.9978 30.2215 15.8188ZM16.5342 20.5179C15.9437 20.5179 15.4627 20.062 15.4627 19.5C15.4627 18.9381 15.9437 18.4822 16.5342 18.4822C17.1247 18.4822 17.6056 18.9381 17.6056 19.5C17.6056 20.062 17.127 20.5179 16.5342 20.5179ZM20.999 20.5179C20.4084 20.5179 19.9275 20.062 19.9275 19.5C19.9275 18.9381 20.4084 18.4822 20.999 18.4822C21.5895 18.4822 22.0704 18.9381 22.0704 19.5C22.0704 20.062 21.5895 20.5179 20.999 20.5179ZM25.4637 20.5179C24.8732 20.5179 24.3923 20.062 24.3923 19.5C24.3923 18.9381 24.8732 18.4822 25.4637 18.4822C26.0543 18.4822 26.5352 18.9381 26.5352 19.5C26.5352 20.062 26.0543 20.5179 25.4637 20.5179Z"
                            fill="#4377FD"/>
                    </svg>

                </div>
            </div>
        </div> : ''
    );
}