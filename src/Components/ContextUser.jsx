import { useContext } from "react";
import { TextContext } from "./ContextProvider";

const ContextUser = () => {

    const msg = useContext(TextContext);

    return(
        <>
            <h3>Context User component</h3>
            <h5>{`Message is: ${msg}`}</h5>
        </>
    );
};

export default ContextUser;