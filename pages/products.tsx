import axios from 'axios';
import { useState } from 'react';

export default function Products() {

    const config = {
        headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        }
    }

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await axios.get('http://192.168.0.45:9000/store/products', config);
        const products = response.data.products;
        console.log(products);
        setProducts(products);
    };

    return (
        <>
        <button onClick={fetchProducts}>Fetch Products</button>
            {
            products.map((product: any) => {
                return (
                    <div key={product.id}>
                        {product.title}
                    </div>
                )    
            })
            }
        </>
    )

}