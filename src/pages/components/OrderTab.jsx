import FoodCard from "./FoodCard";
import PropTypes from 'prop-types';

const OrderTab = ({items}) => {
    return (
        <div>
             <div className="grid md:grid-cols-3 gap-10">
                  {
                      items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
      }
                  </div>
        </div>
    );
};
OrderTab.propTypes = {
    items: PropTypes.array,
    
}
export default OrderTab;