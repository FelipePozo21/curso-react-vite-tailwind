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

    return (
        <ShoppingCardContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            toggleIsProductDetailOpen,
            shoppingCard,
            setShoppingCard
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )
}