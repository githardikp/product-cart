import { useRef } from "react"

export function Cart({ items = [], setItem }){
    const removeItem = (itemId) => {
        setItem(items.filter(item => item.id !== itemId));
      }
    return(
        <div>
            <h2>Cart</h2>
            {items.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <>
                    {items.map((item) => (
                        <ProductInCart key={item.id} item={item} onRemove={()=>removeItem(item.id)}/>
                    ))}
                    <button
                        onClick={()=>setItem([])}
                    >clear all</button>
                </>
            )}
        </div>
    )
}

function ProductInCart({ item, onRemove }){
    const itemRef = useRef();
    
    return (
        <div ref={itemRef}>
            <p>{item.title}</p>
            <button
                onClick={onRemove}
            >remove</button>
        </div>
    )
}