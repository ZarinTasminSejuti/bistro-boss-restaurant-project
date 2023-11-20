import { useState } from "react";
import { useEffect } from "react";
import MenuItem from "../shared/MenuItem";
import SectionTitle from "./SectionTitle";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
        .then((data) => {
          const popularItems = data.filter (item => item.category === "popular")
        setMenu(popularItems);
      });
  }, []);
  return (
    <div className="mb-12">
      <SectionTitle
        subHeading={"From Our Menu"}
        heading={"Popular Menu"}
          ></SectionTitle>
          

          <div className="grid md:grid-cols-2 gap-10">
              {
                  menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
              }
          </div>
    </div>
  );
};

export default PopularMenu;
