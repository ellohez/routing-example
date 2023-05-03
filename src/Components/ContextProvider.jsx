import { useState, createContext } from "react";
import ContextMidChild from "./ContextMidChild";

export const TextContext = createContext();

const ContextProvider = () => {

    // Not unpacking setMsg as it isn't used at this time
    const [msg] = useState("Hello");

    // This container creates and sets the context to pass 
    // down to other children/grandchildren
    return (
        <TextContext.Provider value={msg}>
            <h3>Context provider - {`Message to pass: ${msg}!`}</h3>
            <ContextMidChild />
        </TextContext.Provider>
    );
};

export default ContextProvider;