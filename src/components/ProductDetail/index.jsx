import { IoIosClose } from 'react-icons/io'
import { useContext } from 'react'
import { ShoppingCardContext } from '../../Context/Context'
import { AddAside } from '../addAside/AddAside'
import { Total } from '../Total/Total'

export function ProductDetail() {
    const { 
        toggleIsProductDetailOpen,
        isProductDetailOpen
     } = useContext(ShoppingCardContext)
    return (
        isProductDetailOpen && (
            <aside style={{width:'360px',minHeight:"120px",height:"auto", top:"68px", maxHeight:"calc(100vh - 68px)"}} className="flex flex-col absolute overflow-hidden bg-white right-0 border border-black rounded-lg">
                <div className=" flex justify-between items-center p-2">
                    <h2 className="font-medium items-center">Detail</h2>
                <IoIosClose onClick={() => {
                    toggleIsProductDetailOpen()
                    }} className='text-xl mt-1.5 cursor-pointer'/>
                </div>
                <AddAside />
                <Total className="sticky bottom-0"/>
            </aside>
       )
    )
}