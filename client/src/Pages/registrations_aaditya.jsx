import React, {useEffect, useState} from "react";

import aadityaModule from "../Assets/styles/aaditya.module.css";
import {useQuery} from "@apollo/client";
import {getUnregisterCompanies} from "../graphql/queries";

export const Registrations = () => {
        const adminId = "62fff554745e3943d17ce3ab";
        const [err, setError] = useState('')
        const {data} = useQuery(getUnregisterCompanies);
        const [company, setData] = useState(data)
        useEffect(() => {
            setData(data)
            console.log(company)
        }, [data])

        function acceptCompany(id, index) {
            fetch("http://127.0.0.1:8080" + "/api/acceptCompany", {
                method: "POST",
                credentials: "include",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({id: id}),
            })
                .then(async response => {
                    if (!response.ok) {
                        if (response.status === 400) {
                            setError("something went wrong")
                        } else if (response.status === 401) {
                            setError("unAuthorized attempt")
                        } else if (response.status === 500) {
                            console.log(response)
                            // const data = await response.json()
                        } else {
                        }
                    } else {
                        const status = await response.json()
                        if (status.status) {
                            let a = [...company.unregistercompanies]
                            a.splice(index, 1)
                            setData({
                                unregistercompanies: a
                            })
                        }
                    }
                })
                .catch(error => {
                    setError(error)
                })
        }

        function rejectCompany(id, index) {
            fetch("http://127.0.0.1:8080" + "/api/rejectCompany", {
                method: "POST",
                credentials: "include",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({id: id}),
            })
                .then(async response => {
                    if (!response.ok) {
                        if (response.status === 400) {
                            setError("something went wrong")
                        } else if (response.status === 401) {
                            setError("unAuthorized attempt")
                        } else if (response.status === 500) {
                            console.log(response)
                            // const data = await response.json()
                        } else {
                        }
                    } else {
                        const status = await response.json()
                        if (status.status) {
                            let a = [...company.unregistercompanies]
                            a.splice(index, 1)
                            setData({
                                unregistercompanies: a
                            })
                        }
                    }
                })
                .catch(error => {
                    setError(error)
                })
        }

        return <div className={aadityaModule.cl}>

            <div className={aadityaModule.ot}>
                <h1> Total Applicants:19</h1>
                <div className={aadityaModule.sb}>
                    <p>Search Applicants</p>
                </div>
                <div className={aadityaModule.sb2}>
                    <p>Filter</p>
                </div>
            </div>
            <div className={aadityaModule.lt}>

                <p1>Full Name</p1>
                <p2>Company Type</p2>
                <p3>Applied Date</p3>
                <p4>Email</p4>
                <p5>Action</p5>
            </div>

            {(company) ? company.unregistercompanies.map((data, index) => <div className={aadityaModule.ll}>

                <div className={aadityaModule.cs}>

                </div>
                <p>{data.companyName}</p>
                <div className={aadityaModule.ct}>
                    <p>{data.companyType}</p>
                </div>
                <p1>{data.appliedDate}</p1>
                <p2>{data.username}</p2>
                <button className={aadityaModule.gb} onClick={() => acceptCompany(data._id, index)}>Accept</button>
                <button className={aadityaModule.rb} onClick={() => rejectCompany(data._id, index)}>Reject</button>
            </div>) : ''}
        </div>;

    }
;
