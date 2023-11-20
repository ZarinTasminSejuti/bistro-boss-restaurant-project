import SectionTitle from "./SectionTitle";
import featuredImage from "../../assets/home/featured.jpg";
import './Featured.css';
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
           <SectionTitle
       
                heading={"Featured Item"}
                subHeading={"Check it Out"}
            ></SectionTitle>
            <div className="md:flex justify-center text-white items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase text-justify">where i can get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatibus eaque alias id molestiae rerum consequatur modi asperiores nulla sed vero eveniet animi, ipsa ducimus natus necessitatibus eos repellendus ad. Consequatur mollitia doloribus aliquid, eum adipisci eos, libero possimus eaque debitis quia quisquam alias, recusandae quo cumque ea vero cupiditate.</p>
                    <button className="btn btn-outline text-white border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;