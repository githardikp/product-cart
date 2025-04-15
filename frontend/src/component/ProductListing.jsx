import { useEffect, useState } from "react"

export function ProductListing({ addToCart }){
    const [products, setProducts] = useState([])
    
    useEffect(()=>{
        const fetchProducts = () => {
            console.log("product fetched")
            fetch('http://localhost:3000/products')
                .then((res)=>{
                    return res.json()
                }).then((data)=>{
                    console.log("Products received are ", data);
                    setProducts(data);
                }).catch((error)=>{
                    console.log(error)
                })
        }
        
        fetchProducts() // Fetch immediately on load
        
        const intervalId = setInterval(fetchProducts, 5000)
        
        // Clean up interval on component unmount
        return () => clearInterval(intervalId)
    }, [])
    
    return <div>
        {products.length===0 ? (<p> loading products...</p>) : (products.map((product)=>(
            <div key={product.id || product.title}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <button 
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
        )))}
    </div>
}