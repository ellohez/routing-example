import { useContext } from "react";
import TextContext from "./ContextProvider";

const ContextUser = () => {

    const msg = useContext(TextContext);

    return(
        <>
            <h1>Context User component</h1>
            <h2>{`Message is: ${msg}`}</h2>
        </>
    );
};

export default ContextUser;