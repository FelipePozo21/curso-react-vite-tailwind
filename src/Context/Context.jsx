import { createContext } from "react";
import { useState } from "react";

export const ShoppingCardContext = createContext()

export function ShoppingCard({children}) {
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const [shoppingCard, setShoppingCard] = useState([])
    const toggleIsProductDetailOpen = () => {
        setIsProductDetailOpen(!isProductDetailOpen)
    }
    const removeCard = (key) => {
        setCount(count - 1)
        const filtered = shoppingCard.filter(product => product.id != key)
        setShoppingCard(filtered)
    }

    return (
        <ShoppingCardContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            toggleIsProductDetailOpen,
            shoppingCard,
            setShoppingCard,
            removeCard
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )
}