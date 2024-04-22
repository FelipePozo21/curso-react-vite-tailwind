import { IoIosClose } from 'react-icons/io'
import { useContext } from 'react'
import { ShoppingCardContext } from '../../Context/Context'
import { AddAside } from '../addAside/AddAside'

export function ProductDetail() {
    const { 
        toggleIsProductDetailOpen,
        isProductDetailOpen
     } = useContext(ShoppingCardContext)

    return (
        isProductDetailOpen && (
            <aside style={{width:'360px',height:"calc(100vh - 68px)", top:'68px'}} className="flex flex-col fixed bg-white right-0 border border-black rounded-lg">
                <div className=" flex justify-between items-center p-6">
                    <h2 className="font-medium items-center">Detail</h2>
                <IoIosClose onClick={() => {
                    toggleIsProductDetailOpen()
                    }} className='text-xl mt-1.5 cursor-pointer'/>
                </div>
                <AddAside />
            </aside>
       )
    )
}