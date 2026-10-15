import { Link } from "react-router";

const HomePage = () => {
    return (
        <div>
            <p>home page</p>
            <Link to={'/login'}>Vers login</Link>
        </div>
    )
};

export default HomePage;
