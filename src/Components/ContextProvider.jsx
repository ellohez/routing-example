import { useState, createContext } from "react";
import ContextUser from "./ContextUser";

const TextContext = createContext();

const ContextProvider = () => {

    const [msg, setMsg] = useState("Hello");

    return (
        <TextContext.Provider value={msg}>
            <h1>{`Message to pass: ${msg}!`}</h1>
            <ContextUser />
        </TextContext.Provider>
    );
};

export default ContextProvider;