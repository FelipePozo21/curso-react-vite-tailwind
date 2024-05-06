import { useContext } from "react"
import { Layout } from "../../components/Layout"
import { ShoppingCardContext } from "../../Context/Context"


export function MyOrder() {
    const {
        shoppingCard
    } = useContext(ShoppingCardContext)
    
    return (
        <Layout >
            <div className="flex gap-2 w-9/12 flex-wrap">
                {shoppingCard.map(element => (
                                <div key={element.id} className="p-0 bg-white cursor-pointer box-border w-56 h-60 rounded-lg">
                                <figure className="relative mb-2 w-full h-4/5 ">
                                    <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{element.category}</span>
                                    <img className="w-full h-full object-cover rounded-lg" src={element.image} alt="" />
                                </figure>
                                <p className="flex justify-between">
                                    <span className="text-sm font-light h-10 text-ellipsis overflow-hidden">{element.title}</span>
                                    <span className="text-lg font-medium">{element.price}</span>
                                </p>
                            </div>
                ))}
            </div>
        </Layout>
    )
}