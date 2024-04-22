import { FaPlus } from "react-icons/fa6";
import { useContext } from "react";
import { ShoppingCardContext } from "../../Context/Context";
import { AddAside } from "../addAside/AddAside";

export function Card({prop}) {
    const {
        count,
        setCount
    } = useContext(ShoppingCardContext)
    const {
        category,
        image,
        title,
        price
    } = prop
    return (
        <div className="p-0 bg-white cursor-pointer box-border w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5 ">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{category}</span>
                <img className="w-full h-full object-cover rounded-lg" src={image} alt="" />
                <div className="w-6 h-6 absolute top-0 right-0 flex justify-center items-center bg-white rounded-full m-2 p-1">
                    <FaPlus onClick={() => {
                        setCount(count + 1)
                        AddAside(prop)
                    }}/>
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{title}</span>
                <span className="text-lg font-medium">{price}</span>
            </p>
        </div>
    )
}