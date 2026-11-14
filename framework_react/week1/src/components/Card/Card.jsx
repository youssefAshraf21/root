import {useState} from 'react'
export default function Card({productName, productPrice, productDescription, imgCard,deleteProductFn, index}) {

    const [count, setCount] = useState(0);

    function increasCount() {
        setCount(count + 1);
    }
    function decreasCount() {
        setCount(count - 1);
    }
    return (
        <>
        <div className="card w-96 bg-base-100 shadow-xl container mx-auto mb-5 border-2 border-amber-300 p-4 rounded-2xl">
            <div className="card-body">
                <img src={imgCard} className="hover:scale-105 transform duration-300" alt="" />
                <h2 className="card-title text-center mt-5 text-xl text-amber-950 font-bold">{productName.split(" ").splice(0, 3).join(" ")}</h2>
                <p className="text-amber-950 mt-2 truncate cursor-wait" title={productDescription}>{productDescription}</p>
                <p className="font-bold text-2xl">{productPrice} EGP</p>
                <div className="flex justify-between align-items-center my-4">
                    <span onClick={increasCount} className="font-bold bg-amber-100 px-3 py-2 rounded-lg hover:bg-amber-500 transform duration-300 cursor-pointer">+</span>
                    <span className="font-bold">{count}</span>
                    <span onClick={decreasCount} className="font-bold bg-amber-100 px-3 py-2 rounded-lg  hover:bg-amber-500 transform duration-300 cursor-pointer">-</span>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={
                        () => {
                            deleteProductFn(index);
                        }
                    } className="btn bg-red-600 text-white px-3 py-2 rounded-lg w-full font-semibold hover:bg-red-900 transform duration-300">Delete</button>
                </div>
            </div>
        </div>
        </>
    )   
}
