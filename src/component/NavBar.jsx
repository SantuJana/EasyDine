"use client"

import Image from 'next/image'
import icon from '@/assets/burger.png'
import { FiShoppingCart, FiUser } from "react-icons/fi"
import { CiDiscount1 } from "react-icons/ci"
import { useState, useEffect } from 'react'
import { BiAlignLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function NavBar(){
    const [serfType, setSerfType] = useState(0)
    const [isMobile, setIsMobile] = useState(false);
    const [drawerOpened, setDrawerOpened] = useState(false);

    useEffect(()=>{
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < 500)
            window.addEventListener('resize', setIsMobile(window.innerWidth < 500));
            return () => window.removeEventListener('resize', setIsMobile(window.innerWidth < 500));
          }
    },[])

    const toggleDrawer = () => {
        setDrawerOpened(!drawerOpened)
    }

    if (!isMobile){
        return(
            <div className="d-flex align-items-center justify-content-between px-3 cursor-pointer" style={ styles.navbar }>
                <div className="d-flex gap-1" style={{color: "#333333", cursor: 'pointer'}}>
                    <Image src={icon} width={25} alt='Brand Icon'/>
                    <h5 className="">Easy Dine</h5>
                </div>
        
                {/* <div className='d-flex'>
                    <div className='px-2' onClick={()=>setSerfType(0)}>
                        <span>Order Online</span>
                    </div>
                    <div className="form-check form-switch form-switch-success">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    </div>
                    <div className='px-2' onClick={()=>setSerfType(1)}>
                        <span>Dine Out</span>
                    </div>
                </div> */}
    
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
        )
    }
    return(<>
        <div className="container-fluid bg-warning d-flex justify-content-between align-items-center px-2 pe-4" style={{height: 50}}>
            <BiAlignLeft fontSize={24} onClick={toggleDrawer}/>
            <h5>Easy Dine</h5>
            <FiShoppingCart fontSize={24}/>
        </div>
        <div className={`w-75 h-100 position-absolute bg-light z-3 top-0 ${!drawerOpened && 'd-none'} slide`} style={{transition: '5s ease-in-out'}}>
            <div className="container-fluid border-bottom d-flex justify-content-between align-items-center w-100" style={{height: 100}}>
                <Image src={icon} height={50}/>
                <h2 className='ms-2'>Easy Dine</h2>
                <AiOutlineClose fontSize={24} onClick={toggleDrawer}/>
            </div>
        </div>
    </>)
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
    },
    slide: {

    }
}