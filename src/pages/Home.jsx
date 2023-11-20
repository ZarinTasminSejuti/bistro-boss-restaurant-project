
import Banner from "./components/Banner";
import Category from "./components/Category";
import Featured from "./components/Featured";
import PopularMenu from "./components/PopularMenu";
import Testimonial from "./components/Testimonial";


const Home = () => {
    return (
        <div>
 <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;