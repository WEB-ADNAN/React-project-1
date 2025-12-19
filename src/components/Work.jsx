import w1 from '@images/w1.jpg'
import w2 from '@images/w2.png'
import w3 from '@images/w3.png'
import w4 from '@images/w4.png'
import w5 from '@images/w5.png'
import w6 from '@images/w6.png'
function Work(){
    return(
        <>
        <section className="bg-[#F3F3F3] pt-[60px] lg:pt-[150px] pb-[60px] lg:pb-[150px] px-4 md:px-2 lg:px-0">
            <div className="container">
                <div className="headline w-[80%] lg:w-[48%] text-center mx-auto pb-[50px]">
                    <h1 className="text-[30px] md:text-[45px] text-[#151515] font-bold font-inter pb-[20px]">Our Recent Work</h1>
                    <p className="text-[13px] md:text-[16px] text-[#737373] leading-[26px] font-normal font-inter">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
                </div>

                <div className="work-item grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                    <div className="1 text-center bg-[#FFFFFF] rounded-[20px]">
                        <img src={w1} alt="" className='rounded-[20px] mx-auto w-full'/>
                        <h1 className="text-[20px] text-[#151515] font-bold font-inter pb-[10px] pt-[30px]">Task Management App</h1>
                        <p className="text-[16px] sm:text-[13px] md:text-[16px] text-[#737373] leading-[26px] font-normal font-inter px-[42px] pb-[30px]">This is a task management application that can help you be more </p>
                    </div>


                    <div className="1 text-center bg-[#FFFFFF] rounded-[20px]">
                        <img src={w2} alt="" className='rounded-[20px] mx-auto w-full'/>
                        <h1 className="text-[20px] text-[#151515] font-bold font-inter pb-[10px] pt-[30px]">Saas Landing Page Design</h1>
                        <p className="text-[16px] sm:text-[13px] md:text-[16px] text-[#737373] leading-[26px] font-normal font-inter px-[42px] pb-[30px]">This is a task management application that can help you be more </p>
                    </div>


                    <div className="1 text-center bg-[#FFFFFF] rounded-[20px]">
                        <img src={w3} alt="" className='rounded-[20px] mx-auto w-full'/>
                        <h1 className="text-[20px] text-[#151515] font-bold font-inter pb-[10px] pt-[30px]">App Design</h1>
                        <p className="text-[16px] sm:text-[13px] md:text-[16px] text-[#737373] leading-[26px] font-normal font-inter px-[42px] pb-[30px]">This is a task management application that can help you be more </p>
                    </div>


                    <div className="1 text-center bg-[#FFFFFF] rounded-[20px]">
                        <img src={w4} alt="" className='rounded-[20px] mx-auto w-full'/>
                        <h1 className="text-[20px] text-[#151515] font-bold font-inter pb-[10px] pt-[30px]">Landing Page Design</h1>
                        <p className="text-[16px] sm:text-[13px] md:text-[16px] text-[#737373] leading-[26px] font-normal font-inter px-[42px] pb-[30px]">This is a task management application that can help you be more </p>
                    </div>


                    <div className="1 text-center bg-[#FFFFFF] rounded-[20px]">
                        <img src={w5} alt="" className='rounded-[20px] mx-auto w-full'/>
                        <h1 className="text-[20px] text-[#151515] font-bold font-inter pb-[10px] pt-[30px]">Dashboard Design</h1>
                        <p className="text-[16px] sm:text-[13px] md:text-[16px] text-[#737373] leading-[26px] font-normal font-inter px-[42px] pb-[30px]">This is a task management application that can help you be more </p>
                    </div>


                    <div className="1 text-center bg-[#FFFFFF] rounded-[20px]">
                        <img src={w6} alt="" className='rounded-[20px] mx-auto w-full'/>
                        <h1 className="text-[20px] text-[#151515] font-bold font-inter pb-[10px] pt-[30px]">Web App Design</h1>
                        <p className="text-[16px] sm:text-[13px] md:text-[16px] text-[#737373] leading-[26px] font-normal font-inter px-[42px] pb-[30px]">This is a task management application that can help you be more </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Work