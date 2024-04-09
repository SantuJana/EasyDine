"use client"

import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryIcon from '@/component/CategoryIcon';
import ImageSlider from '@/component/ImageSlider';
import { getCategories, getPopularItems } from '@/services/product';
import { getHomePageBanner } from '@/services/banner';
import Link from 'next/link'
import PopularItemCard from '@/component/PopularItemCard';

export default function Home({someProp}){
    const [isMobile, setIsMobile] = useState(false);
    const [categories, setCategories] = useState([]);
    const [banners, setBanners] = useState([]);
    const [popularItems, setPopularItems] = useState([]);

    const loadCategory = async () => {
        const response = await getCategories()
        setCategories(response.data)
    }

    const loadBanner = async () => {
        const response = await getHomePageBanner()
        setBanners(response.data)
    }

    const loadPopularItems = async () => {
        const response = await getPopularItems()
        setPopularItems(response.data)
    }

    useEffect(()=>{
        loadBanner()
        loadCategory()
        loadPopularItems()
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < 500)
            window.addEventListener('resize', setIsMobile(window.innerWidth < 500));
            return () => window.removeEventListener('resize', setIsMobile(window.innerWidth < 500));
        }
    },[])

    return(
        <>
            <ImageSlider data={banners} isMobile={isMobile} />

            <div className="container mt-5">
                <h4 style={{color: '#555555'}}>Shop By Category</h4>
                <div className={`d-flex ${isMobile ? 'gap-3' : 'gap-5'} overflow-auto`}>
                    {
                        categories.map( (element)=> <CategoryIcon key={element._id} title={element.title} image={element.image} />)
                    }
                </div>
            </div>

            <div className="container mt-2 p-2 ">
                <div className='d-flex justify-content-between'>
                    <h4 style={{color: '#555555'}}>Most Popular Items</h4>
                    <Link href={'#'}>Show All</Link>
                </div>
                <div className={`d-flex ${isMobile ? 'gap-3' : 'gap-5'} overflow-auto pb-4`}>
                    {
                        popularItems.map(element => 
                            <PopularItemCard data={element} key={element._id} />                        
                        )
                    }
                </div>
            </div>
        </>
    )
}
