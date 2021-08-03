import BlogList from './BlogList';
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isFetched, error} = useFetch("http://localhost:8000/blogs");

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {!isFetched && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={"Movies"}/>}
        </div>
     );
}
 
export default Home;