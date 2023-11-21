// import { useState } from "react";
// import { useEffect } from "react";
import useMenu from "../../assets/hooks/useMenu";
import MenuItem from "../shared/MenuItem";
import SectionTitle from "./SectionTitle";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === "popular")
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //       .then((data) => {
  //         const popularItems = data.filter (item => item.category === "popular")
  //       setMenu(popularItems);
  //     });
  // }, []);
  return (
    <div className="mb-12">
      <SectionTitle
        subHeading={"From Our Menu"}
        heading={"Popular Menu"}
          ></SectionTitle>
          

          <div className="grid md:grid-cols-2 gap-10">
              {
                  popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
              }
      </div>
      <div className="text-center mt-8">
      <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>
      </div>
    </div>
  );
};

export default PopularMenu;
