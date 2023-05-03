import { useState, createContext } from "react";
import ContextUser from "./ContextUser";

export const TextContext = createContext();

const ContextProvider = () => {

    const [msg, setMsg] = useState("Hello");

    return (
        <TextContext.Provider value={msg}>
            <h3>{`Message to pass: ${msg}!`}</h3>
            <ContextUser />
        </TextContext.Provider>
    );
};

export default ContextProvider;