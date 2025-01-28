
    
   export const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products/category/motorcycle?delay=3000');
    const result = await response.json();
    console.log(result.products); 
    return result.products;
};