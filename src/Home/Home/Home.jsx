import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Doc House | Home</title>
            </Helmet>
            <h1 className="text-4xl">This is Home page</h1>
        </div>
    );
};

export default Home;