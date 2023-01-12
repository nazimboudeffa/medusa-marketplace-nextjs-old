import React, { useState, useEffect } from 'react';

export default function Products() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://192.168.0.45:9000/store/products');
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const displayProducts = () => {
    if (data === null) {
      return (<span>No data available</span>)
    } else {
      return (data.products.map((product: any) => (
        <li key={product.id}>{product.title}</li>
      )))
    }
  }

  return (
    <ul>
      {displayProducts()}
    </ul>
  );
}