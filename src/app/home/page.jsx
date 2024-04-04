"use client"

import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import category from '@/config/category';
import banner from '@/config/banner';
import CategoryIcon from '@/component/CategoryIcon';
import ImageSlider from '@/component/ImageSlider';

export default function Home({someProp}){
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < 500)
            window.addEventListener('resize', setIsMobile(window.innerWidth < 500));
            return () => window.removeEventListener('resize', setIsMobile(window.innerWidth < 500));
          }
    },[])

    return(
        <>
            <p>{someProp}</p>
            
            <ImageSlider data={banner} isMobile={isMobile} />

            <div className="container mt-5">
                <h4 style={{color: '#555555'}}>Shop By Category</h4>
                <div className={`d-flex ${isMobile ? 'gap-3' : 'gap-5'} overflow-auto`}>
                    {
                        category.map( (element, index)=> <CategoryIcon key={index} title={element.title} image={element.image} />)
                    }
                </div>
            </div>
        </>
    )
}
