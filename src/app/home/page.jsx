"use client"

import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from "react-slick";
import Image from 'next/image'
import icon from '@/assets/burger.png'
import { FiShoppingCart, FiUser } from "react-icons/fi"
import { CiDiscount1 } from "react-icons/ci"
import { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../../../public/images/banner/1.jpg'
import banner2 from '../../../public/images/banner/2.svg'
import banner3 from '../../../public/images/banner/3.jpg'
import category from '@/config/category';

export default function Home(){
    const [serfType, setSerfType] = useState(0);
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
      };
    return(
        <>
            <div className="d-flex align-items-center justify-content-between px-3 cursor-pointer" style={ styles.navbar }>
                <div className="d-flex gap-1" style={{color: "#333333", cursor: 'pointer'}}>
                    <Image src={icon} width={25} alt='Brand Icon'/>
                    <h5 className="">Easy Dine</h5>
                </div>

                <div className='d-flex'>
                    <div className='px-2' onClick={()=>setSerfType(0)}>
                        <span>Order Online</span>
                    </div>
                    <div className="form-check form-switch form-switch-success">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    </div>
                    <div className='px-2' onClick={()=>setSerfType(1)}>
                        <span>Dine Out</span>
                    </div>
                </div>

                <div className='d-flex gap-4'>
                    <div className='d-flex gap-1 align-items-center' style={styles.pointer}>
                        <CiDiscount1 />
                        <span>Offers</span>
                    </div>
                    <div className='d-flex gap-1 align-items-center' style={styles.pointer}>
                        <FiShoppingCart />
                        <span>Cart</span>
                    </div>
                    <div className='d-flex gap-1 align-items-center' style={styles.pointer}>
                        <FiUser />
                        <span>Profile</span>
                    </div>
                </div>
            </div>
            <Slider {...settings} className='container rounded mt-3'>
                <div>
                    <Image src={banner1} height={250} className='w-100 rounded bg-warning'/>
                </div>
                {/* <div>
                    <Image src={banner2} height={250} className='w-100 rounded bg-warning'/>
                </div> */}
                <div>
                    <Image src={banner3} height={250} className='w-100 rounded bg-warning'/>
                </div>
            </Slider>

            <div className="container mt-5">
                <h4 style={{color: '#555555'}}>Shop By Category</h4>
                <div className='d-flex gap-5 overflow-auto'>
                    {
                        category.map( (element)=>
                        <div className='d-flex flex-column align-items-center'>
                            <div className='bg-warning d-flex justify-content-center align-items-center rounded rounded-circle' style={{height: 100, width: 100}}>
                                <Image src={require(`../../../public/images/category/${element.image}`)} width={80} height={80} />
                            </div>
                            <span className='text-center'>{element.title}</span>
                        </div>)
                    }
                </div>
            </div>
        </>
    )
}

const styles = {
    navbar: {
        height: 50,
        backgroundColor: 'white',
        background: 'linear-gradient(to right, #ffc107, transparent)',
    },
    pointer: {
        cursor: "pointer",
    },
    activeTab: {
        backgroundColor: "#abb8c3",
    }
}