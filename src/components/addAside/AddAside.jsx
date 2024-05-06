import { useContext } from 'react'
import { ShoppingCardContext } from '../../Context/Context'
import { IoIosClose } from 'react-icons/io'

export function AddAside() {
    const {
        shoppingCard,
        removeCard
    } = useContext(ShoppingCardContext)
    const loadShoppingCard = () => {
        let map = shoppingCard.map(e => {
            return {
                title: e.title,
                price: e.price,
                image: e.image,
                key: e.id
            }
        })
        return(map)
    }

    const callFunc = loadShoppingCard()
    return (
        <div  style={{width:"360px"}} className='relative grid  auto-rows-max h-auto gap-2 overflow-auto items-center p-2'>
                {
                    callFunc.map(element => (
                        <div key={element.key} className='relative h-24 w-full flex justify-between items-center'>
                        <IoIosClose onClick={() => {
                            removeCard(element.key)
                        }} className='absolute top-0 right-2   font-semibold'/>
                            <img className='object-contain h-20  rounded-lg imag bg-cover w-16' src={element.image}/>
                            <div className='flex flex-col max-w-32 relative text-nowrap  text-sm gap-2 mr-2'>
                                <p className='w-32 text-ellipsis overflow-hidden'>{element.title}</p>
                                <p className='font-semibold text-right'>${element.price}</p>
                            </div>
                        </div>
                    )) 
                }
            </div>    
     )
}