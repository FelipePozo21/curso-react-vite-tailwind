import { IoIosClose } from 'react-icons/io'

export function AddAside(prop) {
    const {
        image,
        title,
        price
    } = prop
    console.log(prop)

    return (
        <div style={{width:"360px", height:"80px"}} className='relative flex flex-row justify-between items-center p-2'>
            <IoIosClose className='absolute top-0 right-2 font-semibold'/>
            <img className='rounded-lg bg-cover' src={image}/>
            <div className='flex flex-col gap-2 mr-2'>
                <p>{title}</p>
                <p className='font-semibold'>{price}</p>
            </div>
        </div>
    )
}