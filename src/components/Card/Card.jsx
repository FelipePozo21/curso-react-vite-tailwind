import { FaPlus } from "react-icons/fa6";

export function Card(item) {
    console.log(item)
    return (
        <div className="p-0 bg-white cursor-pointer box-border w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5 ">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{item.category}</span>
                <img className="w-full h-full object-cover rounded-lg" src={item.image} alt="" />
                <div className="w-6 h-6 absolute top-0 right-0 flex justify-center items-center bg-white rounded-full m-2 p-1">
                    <FaPlus />
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{item.title}</span>
                <span className="text-lg font-medium">{item.price}</span>
            </p>
        </div>
    )
}