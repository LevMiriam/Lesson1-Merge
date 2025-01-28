import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart, addToCart, reduceFromCart } from '../Redux/CartSlice';
import Modal from './Modal';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const [shipping, setShipping] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleRemove = (item) => {
        dispatch(removeFromCart(item));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleAddQuantity = (item) => {
        dispatch(addToCart(item));
    };

    const handleReduceQuantity = (item) => {
        if (item.quantity > 1) {
            dispatch(reduceFromCart(item));
        } else {
            handleRemove(item);
        }
    };

    const calculateSubtotal = (price, quantity) => {
        return price * quantity;
    };

    const calculateTotal = () => {
        const subtotal = cartItems.reduce((acc, item) => acc + calculateSubtotal(item.price, item.quantity || 1), 0);
        return shipping ? subtotal + 5 : subtotal;
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const handleCheckout = () => {
        setIsModalOpen(true);
    };

    const confirmCheckout = () => {
        handleClearCart();
        setIsModalOpen(false);
    };

    return (
            <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <button onClick={() => handleReduceQuantity(item)}>-</button>
                                            {item.quantity || 1}
                                            <button onClick={() => handleAddQuantity(item)}>+</button>
                                        </div>
                                    </td>
                                    <td>${calculateSubtotal(item.price, item.quantity || 1).toFixed(2)}</td>
                                    <td>
                                        <button onClick={() => handleRemove(item)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div>                   
                        <div className="total-container">
                            <h3>Total: ${calculateTotal().toFixed(2)}</h3>
                        </div>
                        <label>
                            <input
                                type="checkbox"
                                checked={shipping}
                                onChange={() => setShipping(!shipping)}
                            />
                            משלוח עד הבית
                        </label>
                        <br />
                        <button onClick={handleCheckout}>לתשלום והזמנה</button>
                    </div>
                </>
            )}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={confirmCheckout}
            />
        </div>
    );
}

export default Cart;