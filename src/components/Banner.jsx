import banner from '@images/banner.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Banner(){
    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
  };

    return(
        <>
        <section className='relative mb-[70px] lg:mb-[171px] '>
            <img src={banner} alt="" className='w-full h-screen' />
            <div className='absolute bg-[rgba(0,0,0,0.6)] w-full top-0 left-0 h-full'>
                <div className="container px-4 md:px-0">
                    <div className="slider-main w-full md:max-w-[950px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                        <Slider {...settings}>
                            <div className="slides text-center mb-[15px]">
                                    <h1 className='text-[33px] sm:text-[55px] md:text-[65px] lg:text-[75px] leading-[120%] text-[#FFFFFF] font-inter font-bold'>We Help brands with high quality services</h1>
                                    <p className='text-[14px] sm:text-[16px] leading-[26px] font-normal font-inter text-[#fff] pt-[51px] pb-[55px] max-w-[621px] mx-auto'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                                <div className="button">
                                    <a href="" className='text-[20px] text-[#FFFFFF] leading-[26px] font-inter font-semibold px-[42px] py-[15px] bg-[#6A4DF4] rounded-[10px]'>Get Started</a>
                                </div>
                            </div>


                            <div className="slides text-center">
                                    <h1 className='text-[33px] sm:text-[55px] md:text-[65px] lg:text-[75px] leading-[120%] text-[#FFFFFF] font-inter font-bold'>We Help brands with high quality services</h1>
                                    <p className='text-[14px] sm:text-[16px] leading-[26px] font-normal font-inter text-[#fff] pt-[51px] pb-[55px] max-w-[621px] mx-auto'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                                <div className="button">
                                    <a href="" className='text-[20px] text-[#FFFFFF] leading-[26px] font-inter font-semibold px-[42px] py-[15px] bg-[#6A4DF4] rounded-[10px]'>Get Started</a>
                                </div>
                            </div>


                            <div className="slides text-center">
                                    <h1 className='text-[33px] sm:text-[55px] md:text-[65px] lg:text-[75px] leading-[120%] text-[#FFFFFF] font-inter font-bold'>We Help brands with high quality services</h1>
                                    <p className='text-[14px] sm:text-[16px] leading-[26px] font-normal font-inter text-[#fff] pt-[51px] pb-[55px] max-w-[621px] mx-auto'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                                <div className="button">
                                    <a href="" className='text-[20px] text-[#FFFFFF] leading-[26px] font-inter font-semibold px-[42px] py-[15px] bg-[#6A4DF4] rounded-[10px]'>Get Started</a>
                                </div>
                            </div>


                            <div className="slides text-center">
                                    <h1 className='text-[33px] sm:text-[55px] md:text-[65px] lg:text-[75px] leading-[120%] text-[#FFFFFF] font-inter font-bold'>We Help brands with high quality services</h1>
                                    <p className='text-[14px] sm:text-[16px] leading-[26px] font-normal font-inter text-[#fff] pt-[51px] pb-[55px] max-w-[621px] mx-auto'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                                <div className="button">
                                    <a href="" className='text-[20px] text-[#FFFFFF] leading-[26px] font-inter font-semibold px-[42px] py-[15px] bg-[#6A4DF4] rounded-[10px]'>Get Started</a>
                                </div>
                            </div>
                        </Slider>
                    </div>

                    {/* <div className="dots flex gap-[3px] absolute bottom-[53px] left-[50%] -translate-x-1/2">
                        <div className="w-[24px] h-[24px] bg-[#4756DF] rounded-[50%]"></div>
                        <div className="w-[24px] h-[24px] bg-[#4756DF] rounded-[50%]"></div>
                        <div className="w-[24px] h-[24px] bg-[#4756DF] rounded-[50%]"></div>
                        <div className="w-[24px] h-[24px] bg-[#4756DF] rounded-[50%]"></div>
                    </div> */}
                </div>
            </div>
        </section>
        </>
    )
}
export default Banner

