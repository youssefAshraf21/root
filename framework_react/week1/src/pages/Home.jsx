import Card from "../components/Card/Card"
import Navbar from "../components/Navbar/Navbar"
import Loader from "../components/Loader/Loader"
import { useState } from "react";

export default function Home() {
    const [products, setProducts] = useState([]);

    function deleteProduct(id) {
        // let newProducts = structuredClone(products);
        // newProducts.splice(index, 1);
        // setProducts(newProducts);
        //delete by fillter array method
        let filterArr = products.filter((prod)=> {
            return prod.id != id
        })
        setProducts(filterArr)
    }

    async function getProducts() {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        setProducts(data)
    }
    getProducts()
    

    return (
        <>
        <Navbar />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {products == 0 ? <Loader /> :products.map((product , index)=>{
            return (
                <Card key={product.id} productName={product.title}
                productPrice={product.price} productDescription={product.description} 
                imgCard={product.image} deleteProductFn={deleteProduct} index={index} 
                id={product.id}/> 
            )
        })}
        </div>
        </>
    )
}
