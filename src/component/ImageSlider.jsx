import Slider from "react-slick";
import Image from "next/image";

export default function ImageSlider({data, isMobile}){
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
        <Slider {...settings} className='container rounded mt-3'>
            {
                data.map((element, index) => 
                    <div key={index}>
                        <Image src={require(`../../public/images/banner/${element.image}`)} height={isMobile ? 150 : 288} className='w-100 rounded bg-warning'/>
                    </div>
                )
            }
        </Slider>
    )
}