import Navbar from "../components/navbar";
import { useEffect, useState } from 'react'
import { medusaClient } from '../utils/client'

export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            const results = await medusaClient.products.list();
            setProducts(results.products)
    }
    getProducts()
    }, []);
    return (
        <>  
            <Navbar />
            <ul>
            {products.map((product) => (
                <li key={product.id}>{product.title}</li>
            ))}
            </ul>
        </>
    )
}