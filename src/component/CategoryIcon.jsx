import Image from "next/image"

export default function CategoryIcon({title, image}){
    return (
        <div className='d-flex flex-column align-items-center pointer' >
            <div className='bg-warning d-flex justify-content-center align-items-center rounded rounded-circle' style={{height: 100, width: 100}}>
                <Image src={require(`../../public/images/category/${image}`)}Category alt="" width={80} height={80} />
            </div>
            <span className='text-center mt-2'>{title}</span>
        </div>
    )
}