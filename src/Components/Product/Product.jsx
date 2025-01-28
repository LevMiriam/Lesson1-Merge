import './Product.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/CartSlice'; 

const Product = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product)); 
    };

    return (
        <div className="card">
            <img
                src={product.images[2]}
                alt={product.title}
                className="card-image"
            />
            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className="card-text description">{product.description}</p>
                <p className="card-text">
                    <strong>Price:</strong> ${product.price.toFixed(2)}
                </p>
                <p className="card-text">
                    <strong>Stock:</strong> {product.stock}
                </p>
                <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
}
export default Product;


