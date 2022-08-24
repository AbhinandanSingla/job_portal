import React, {createContext, useState} from "react"

const UserContext = createContext([{}, p => {
}])
let initialState = {
    companyLogin: false,
    userLogin: false,
    adminLogin: false,
    id: ''
//    62f807a92d20471cda9dab1a
}

const UserProvider = props => {
    const [state, setState] = useState(initialState)

    return (
        <UserContext.Provider value={[state, setState]}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}