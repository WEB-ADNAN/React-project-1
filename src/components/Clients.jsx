import c1 from '@images/c1.png'
import c2 from '@images/c2.png'
import c3 from '@images/c3.png'
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

function PrevArrow(props){
    const { onClick } = props;
    return(
        <button
            onClick={onClick}
            className='w-[40px] h-[40px] text-[#4756DF] absolute top-[50%] left-[0%] -translate-x-1/2 z-10 cursor-pointer'
            >
            <FaChevronCircleLeft className='w-[40px] h-[40px]'/>
        </button>
    );
}

function NextArrow(props){
    const { onClick } = props;
    return(
        <button
            onClick={onClick}
            className='absolute font-[40px] text-[#4756DF] top-[50%] right-[0%] -translate-x-1/2 z-10 cursor-pointer'
            >
            <FaChevronCircleRight className='w-[40px] h-[40px]'/>
        </button>
    );
}

function Clients(){
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
        responsive: [
            {
            breakpoint: 641,
                settings: {
                slidesToShow: 1,
                arrows: false,
            }
          },
            {
            breakpoint: 769,
                settings: {
                slidesToShow: 2,
                arrows: false,
            }
          },
            {
            breakpoint: 1024,
                settings: {
                slidesToShow: 2,
                arrows: false,
            }
          },
        ]
    };

    return(
        <>
        <section className='pb-[70px] lg:pb-[227px] px-4 md:px-2 lg:px-0'>
            <div className="container">
                <div className="headline w-[80%] lg:w-[48%] text-center mx-auto pb-[60px] md:pb-[130px]">
                    <h1 className="text-[35px] md:text-[45px] text-[#151515] font-bold font-inter pb-[9px] md:pb-[20px]">Some Client Reviews</h1>
                    <p className="text-[13px] md:text-[16px] text-[#737373] leading-[26px] font-normal font-inter">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
                </div>

                <div className="gap-[24px] relative">
                    <Slider {...settings}>
                        <div className="item px-[58px] py-[54px] rounded-[30px]">
                            <img src={c1} alt="" />
                            <p className="text-[16px] text-[#737373] leading-[26px] font-normal font-inter py-[20px]">I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                            <div className="icons flex gap-[5px] pb-[30px]">
                                <FaStar className='w-[24px] h-[24px] text-[#F9BD2C]'/>
                                <FaStar className='w-[24px] h-[24px] text-[#F9BD2C]'/>
                                <FaStar className='w-[24px] h-[24px] text-[#F9BD2C]'/>
                                <FaStar className='w-[24px] h-[24px] text-[#F9BD2C]'/>
                                <FaStar className='w-[24px] h-[24px] text-[#F9BD2C]'/>
                            </div>

                            <div className="client flex gap-[20px]">
                                <img src={c2} alt="" />
                                <div className="client-item">
                                    <h1 className='text-[20px] text-[#232323] font-semibold leading-[120%] font-inter'>Eric Drake</h1>
                                    <p className="text-[16px] text-[#737373] leading-[26px] font-normal font-inter">Digital Marketor</p>
                                </div>
                            </div>
                        </div>

                        <div className="item px-[58px] py-[54px] rounded-[30px]">
                            <img src={c1} alt="" />
                            <p className="text-[16px] text-[#737373] leading-[26px] font-normal font-inter py-[20px]">I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                            <div className="icons flex gap-[5px] pb-[30px]">
                                <FaStar className='w-[24px] h-[24px] text-[#F9BD2C]'/>
                                <FaStar className='w-[24px] h-[24px] text-[#F9BD2C]'/>
                                <FaStar className='w-[24px] h-[24px] text-[#F9BD2C]'/>
                                <FaStar className='w-[24px] h-[24px] text-[#F9BD2C]'/>
                                <FaStar className='w-[24px] h-[24px] text-[#F9BD2C]'/>
                            </div>

                            <div className="client flex gap-[20px]">
                                <img src={c2} alt="" />
                                <div className="client-item">
                                    <h1 className='text-[20px] text-[#232323] font-semibold leading-[120%] font-inter'>Eric Drake</h1>
                                    <p className="text-[16px] text-[#737373] leading-[26px] font-normal font-inter">Digital Marketor</p>
                                </div>
                            </div>
                        </div>

                        <div className="item px-[58px] py-[54px] rounded-[30px]">
                            <img src={c1} alt="" />
                            <p className="text-[16px] text-[#737373] leading-[26px] font-normal font-inter py-[20px]">I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                            <div className="icons flex gap-[5px] pb-[30px]">
                                <FaStar className='w-[24px] h-[24px] text-[#F9BD2C]'/>
                                <FaStar className='w-[24px] h-[24px] text-[#F9BD2C]'/>
                                <FaStar className='w-[24px] h-[24px] text-[#F9BD2C]'/>
                                <FaStar className='w-[24px] h-[24px] text-[#F9BD2C]'/>
                                <FaStar className='w-[24px] h-[24px] text-[#F9BD2C]'/>
                            </div>

                            <div className="client flex gap-[20px]">
                                <img src={c3} alt="" />
                                <div className="client-item">
                                    <h1 className='text-[20px] text-[#232323] font-semibold leading-[120%] font-inter'>Eric Drake</h1>
                                    <p className="text-[16px] text-[#737373] leading-[26px] font-normal font-inter">Digital Marketor</p>
                                </div>
                            </div>
                        </div>

                        <div className="item px-[58px] py-[54px] rounded-[30px]">
                            <img src={c1} alt="" />
                            <p className="text-[16px] text-[#737373] leading-[26px] font-normal font-inter py-[20px]">I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                            <div className="icons flex gap-[5px] pb-[30px]">
                                <FaStar className='w-[24px] h-[24px] text-[#F9BD2C]'/>
                                <FaStar className='w-[24px] h-[24px] text-[#F9BD2C]'/>
                                <FaStar className='w-[24px] h-[24px] text-[#F9BD2C]'/>
                                <FaStar className='w-[24px] h-[24px] text-[#F9BD2C]'/>
                                <FaStar className='w-[24px] h-[24px] text-[#F9BD2C]'/>
                            </div>

                            <div className="client flex gap-[20px]">
                                <img src={c3} alt="" />
                                <div className="client-item">
                                    <h1 className='text-[20px] text-[#232323] font-semibold leading-[120%] font-inter'>Eric Drake</h1>
                                    <p className="text-[16px] text-[#737373] leading-[26px] font-normal font-inter">Digital Marketor</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
        </>
    )
}
export default Clients