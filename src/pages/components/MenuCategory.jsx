import MenuItem from "../shared/MenuItem";
import PropTypes from "prop-types";
import Cover from "../shared/Cover";

const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div className="pt-10">
            { title && <Cover img={coverImg} title={title}></Cover> }
            <div className="grid md:grid-cols-2 gap-10 my-16">
              {
                  items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
              }
      </div>
        </div>
    );
};

MenuCategory.propTypes = {
    items: PropTypes.array,
    title: PropTypes.string,
    coverImg: PropTypes.string
  };
export default MenuCategory;