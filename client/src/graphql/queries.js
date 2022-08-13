import {gql} from '@apollo/client';

export const getJob = gql`
    query{
        jobList{
            _id,
            jobProfile,
            jobTitle,
            SalaryRange,
            jobLocation,
            companyName
        }
    }
`
export const getJobDescription = gql`
    query jobDescription($id:String!){
        jobDesc(id: $id){
            _id,
            jobTitle,
            companyName,
            companyID,
            jobCategory,
            jobLocation,
            jobDescription,
            ApplicationDeadline,
            Qualifications,
            Experience,
            SalaryRange,
            jobProfile,
            jobType
        }
    }
`