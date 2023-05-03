import { useParams, Link } from "react-router-dom/cjs/react-router-dom";

const Users = () => {
    const {id} = useParams();

    return (
        <>
            <h1>Users information page</h1>
            <strong>Select a user:</strong>
            <ul>
                <li>
                    <Link to="/users/1"></Link>
                </li>
                <li>
                    <Link to="/users/2"></Link>
                </li>
                <li>
                    <Link to="/users/3"></Link>
                </li>
            </ul>
            <p>{id}</p>
        </>
    );
};

export default Users;