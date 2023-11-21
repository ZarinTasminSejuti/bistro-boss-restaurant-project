import PropTypes from 'prop-types';

const FoodCard = ({ item }) => {
    const { image, price, recipe, name } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="food card" /></figure>
                <p className='absolute right-0  mr-4 mt-5 px-5 bg-slate-900 text-white'>${price}</p>
  <div className="card-body text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};
FoodCard.propTypes = {
    item: PropTypes.object,
    
}
export default FoodCard;