import axios from "axios";

const getProducts = async () => {
  try {
    const res = await axios.get("http://192.168.0.45:9000/store/products");
    const products = res.data.products;
    console.log(products);
    return products;
  } catch (error) {
    return error;
  }
};

export default function Products() {
    return (
        <>
            {getProducts()}
        </>
    )
}