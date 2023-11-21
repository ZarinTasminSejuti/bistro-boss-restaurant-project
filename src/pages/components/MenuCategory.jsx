import MenuItem from "../shared/MenuItem";
import PropTypes from "prop-types";
import Cover from "../shared/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div className="pt-10">
            { title && <Cover img={coverImg} title={title}></Cover> }
            <div className="grid md:grid-cols-2 gap-10 my-16">
              {
                  items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
              }
        </div>
       <Link to={`/order/${title}`}> <button className="btn btn-outline text-white border-0 border-b-4 mt-4">Order Now</button></Link>
        </div>
    );
};

MenuCategory.propTypes = {
    items: PropTypes.array,
    title: PropTypes.string,
    coverImg: PropTypes.string
  };
export default MenuCategory;