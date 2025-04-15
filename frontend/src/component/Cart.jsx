import { useRef } from "react"

export function Cart({ items = [], setItem }){
    return(
        <div>
            <h2>Cart</h2>
            {items.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <>
                    {items.map((item) => (
                        <ProductInCart key={item.id} item={item} />
                    ))}
                    <button
                        onClick={()=>setItem([])}
                    >clear all</button>
                </>
            )}
        </div>
    )
}

function ProductInCart({ item}){
    const itemRef = useRef();
    
    return (
        <div ref={itemRef}>
            <p>{item.title}</p>
            <button
                onClick={()=>{
                    itemRef.current.innerHTML=""
                }}
            >remove</button>
        </div>
    )
}