import {createContext, useMemo, useState} from "react";

const DataContext = createContext();
const ResumeProvider = (props) => {
    const [userDataProvider, setUserData] = useState({education: [], workHistory: []});
    const value = useMemo(() => ({userDataProvider, setUserData}), [userDataProvider])
    return (<DataContext.Provider value={value}>
        {props.children}
    </DataContext.Provider>);
}
export {ResumeProvider, DataContext};