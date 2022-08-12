import {gql} from '@apollo/client';

export const getCategories = gql`
    query{
        jobList{
            _id,
            jobTitle,
            SalaryRange,
            jobLocation,
        }
    }
`