"use client"

import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import icon from '@/assets/burger.png'
import { FiShoppingCart, FiUser } from "react-icons/fi"
import { CiDiscount1 } from "react-icons/ci"
import { useState } from 'react'

export default function Home(){
    const [serfType, setSerfType] = useState(0);
    return(
        <>
            <div className="d-flex align-items-center justify-content-between px-3 cursor-pointer" style={ styles.navbar }>
                <div className="d-flex gap-1" style={{color: "#333333", cursor: 'pointer'}}>
                    <Image src={icon} width={25} alt='Brand Icon'/>
                    <h5 className="">Easy Dine</h5>
                </div>

                <div className='border rounded border-secondary d-flex overflow-hidden'>
                    <div className='px-2' style={serfType == 0 ? styles.activeTab : styles.pointer} onClick={()=>setSerfType(0)}>
                        <span>Order Online</span>
                    </div>
                    <div className='px-2' style={serfType == 1 ? styles.activeTab : styles.pointer} onClick={()=>setSerfType(1)}>
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