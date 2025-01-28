import { useEffect, useState } from 'react';
import Product from './Product/Product';
import { fetchProducts } from '../api';
import Search from './Search';
import './Product/Product.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [productCount, setProductCount] = useState(0);

    useEffect(() => {
        setLoading(true);
        fetchProducts().then((result) => {
            setProducts(result);
            setFilteredProducts(result);
            setLoading(false);
        });
    }, []);

    const onSearchProduct = (query) => {
        if (query === '') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((product) =>
                product.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    };

    useEffect(() => {
        setProductCount(products.length);
    }, [products]);

    return (
        <div className="container">
            <div className="search-container">
                <Search onSearch={onSearchProduct} />
            </div>
            {loading ? (
                <div className="loading">
                    <img src="../icons/loadcat.webp" alt="Loading..." />
                </div>
            ) : (
                <div className="row">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <Product key={product.id} product={product} />
                        ))
                    ) : (
                        <h4>No products available</h4>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductList;