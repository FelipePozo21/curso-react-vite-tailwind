import { useContext } from "react"
import { ShoppingCardContext } from "../../Context/Context"
import { Link } from 'react-router-dom'

export function Total() {
    const {
        shoppingCard
    } = useContext(ShoppingCardContext)

    const totalSum = () => {
        const price = shoppingCard.map((product) => product.price)
        return (
            shoppingCard.length > 0 ? price.reduce((a,b) => a + b).toFixed(2) : 0
        )
    }
    totalSum()
    return (
        <div className="flex justify-between flex-col items-center w- border-t-2 mx-2 flex-wrap">
            <div className="flex justify-between w-full items-center">
                <p className="text-lg">total</p>
                <p>{totalSum()}</p>
            </div>
            <Link to='/my-orders/last'>
                <button className="bg-black text-white px-8 py-2 rounded-lg my-2">Checkout</button>
            </Link>
        </div>
    )
}