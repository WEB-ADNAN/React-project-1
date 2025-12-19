import service1 from '@images/service1.png'
import service2 from '@images/service2.png'
import service3 from '@images/service3.png'
import service4 from '@images/service4.png'
import service5 from '@images/service5.png'
import service6 from '@images/service6.png'
function Services(){
    return(
        <>
        <section className='pb-[60px] lg:pb-[103px] px-4 md:px-2 lg:px-0'>
            <div className="container">
                <div className="headline w-[80%] lg:w-[48%] text-center mx-auto pb-[30px] md:pb-[50px]">
                    <h1 className="text-[30px] md:text-[45px] text-[#151515] font-bold font-inter pb-[10px] md:pb-[20px]">Our Provided Services</h1>
                    <p className="text-[13px] md:text-[16px] text-[#737373] leading-[26px] font-normal font-inter">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
                </div>

                <div className="service-main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                    <div className="1 text-center hover:shadow-one px-[49px] pt-[80px] pb-[47px] rounded-[20px]">
                        <img src={service1} alt="" className='mx-auto' />
                        <h1 className='text-[25px] text-[#151515] font-bold font-inter pt-[40px] pb-[20px]'>Web Design</h1>
                        <p className='text-[14px] sm:text-[15px] md:text-[16px] text-[#737373] leading-[26px] font-normal font-inter px-[7px]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                    </div>


                    <div className="1 text-center hover:shadow-one px-[49px] pt-[80px] pb-[47px] rounded-[20px]">
                        <img src={service2} alt="" className='mx-auto' />
                        <h1 className='text-[25px] text-[#151515] font-bold font-inter pt-[40px] pb-[20px]'>UI/UX Design</h1>
                        <p className='text-[14px] sm:text-[15px] md:text-[16px] text-[#737373] leading-[26px] font-normal font-inter px-[7px]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                    </div>


                    <div className="1 text-center hover:shadow-one px-[49px] pt-[80px] pb-[47px] rounded-[20px]">
                        <img src={service3} alt="" className='mx-auto' />
                        <h1 className='text-[25px] text-[#151515] font-bold font-inter pt-[40px] pb-[20px]'>Web Development</h1>
                        <p className='text-[14px] sm:text-[15px] md:text-[16px] text-[#737373] leading-[26px] font-normal font-inter px-[7px]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                    </div>


                    <div className="1 text-center hover:shadow-one px-[49px] pt-[80px] pb-[47px] rounded-[20px]">
                        <img src={service4} alt="" className='mx-auto' />
                        <h1 className='text-[25px] text-[#151515] font-bold font-inter pt-[40px] pb-[20px]'>Motion Graphics</h1>
                        <p className='text-[14px] sm:text-[15px] md:text-[16px] text-[#737373] leading-[26px] font-normal font-inter px-[7px]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                    </div>


                    <div className="1 text-center hover:shadow-one px-[49px] pt-[80px] pb-[47px] rounded-[20px]">
                        <img src={service5} alt="" className='mx-auto' />
                        <h1 className='text-[25px] text-[#151515] font-bold font-inter pt-[40px] pb-[20px]'>3D Animation</h1>
                        <p className='text-[14px] sm:text-[15px] md:text-[16px] text-[#737373] leading-[26px] font-normal font-inter px-[7px]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                    </div>

                    <div className="1 text-center hover:shadow-one px-[49px] pt-[80px] pb-[47px] rounded-[20px]">
                        <img src={service6} alt="" className='mx-auto' />
                        <h1 className='text-[25px] text-[#151515] font-bold font-inter pt-[40px] pb-[20px]'>Digital Marketing</h1>
                        <p className='text-[14px] sm:text-[15px] md:text-[16px] text-[#737373] leading-[26px] font-normal font-inter px-[7px]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Services