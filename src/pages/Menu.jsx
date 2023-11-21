import { Helmet} from 'react-helmet-async';
import Cover from './shared/Cover';
import menuImg from "../assets/menu/banner3.jpg"
import dessertImg from "../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../assets/menu/pizza-bg.jpg"
import saladImg from "../assets/menu/salad-bg.jpg"
import soupImg from "../assets/menu/soup-bg.jpg"
import useMenu from '../assets/hooks/useMenu';
import SectionTitle from './components/SectionTitle';
import MenuCategory from './components/MenuCategory';

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === "dessert");
  const soup = menu.filter(item => item.category === "soup");
  const salad = menu.filter(item => item.category === "salad");
  const pizza = menu.filter(item => item.category === "pizza");
  const offered = menu.filter(item => item.category === "offered");
    return (
        <div>
             <Helmet>
        <title>Bistro Boss | Menu</title>
     
        </Helmet>
        <Cover img={menuImg} title="Our Menu"></Cover>
        {/* main cover  */}
        <SectionTitle
         subHeading={"Don't miss"}
         heading={"Today's offer"}
        ></SectionTitle>

        {/* offered menu  */}
        <MenuCategory items={offered}></MenuCategory>

        {/* dessert menu  */}
        <MenuCategory items={dessert} title="dessert" coverImg={dessertImg}></MenuCategory>

        {/* pizza menu */}
        <MenuCategory items={pizza} title="pizza" coverImg={pizzaImg}></MenuCategory>

        {/* salad menu */}
        <MenuCategory items={salad} title="salad" coverImg={saladImg}></MenuCategory>

        {/* soup menu */}
        <MenuCategory items={soup} title="soup" coverImg={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;