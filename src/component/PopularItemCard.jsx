import Image from 'next/image'
import { Rating } from 'react-simple-star-rating'

export default function PopularItemCard({data}){
 return(
    <>
        <div className="border border-warning border-1 rounded shadow" style={{width:200, minHeight:220,}}>
            <div className="rounded-top overflow-hidden">
                <Image src={require(`../../public/images/product/${data.thumbImage}`)} alt='Item Image' style={{height: 'auto', }} className='w-100'/>
            </div>
            <div className=" p-1">
                <span>{data.name}</span>
            </div>
            <div className=" p-2 d-flex justify-content-between align-items-center">
                <div>
                    <span className='text-dark'>&#8377; {data.price}</span><br />
                    <span className='d-flex align-items-start flex-column' style={{fontSize: 14}}>{data.rating.toFixed(1)} <Rating initialValue={parseInt(data.rating)} size={14} className='m-0 p-0'/></span>
                </div>
                <div>
                    <button className='btn btn-outline-warning btn-sm'>Add</button>
                </div>
            </div>
        </div>
    </>
 )
}