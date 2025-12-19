import why1 from '@images/why1.png'
import why2 from '@images/why2.png'
import why from '@images/why.jpg'
function Why(){
    return(
        <>
        <section className="pt-[60px] lg:pt-[150px] pb-[60px] lg:pb-[106px] px-4 md:px-2 lg:px-0">
            <div className="container">
                <div className="headline w-[80%] lg:w-[48%] text-center mx-auto pb-[60px] lg:pb-[130px]">
                    <h1 className="text-[30px] md:text-[38px] lg:text-[45px] text-[#151515] font-bold font-inter pb-[20px] md:px-[65px]">Why You Should Choose Agenc</h1>
                    <p className="text-[13px] md:text-[16px] text-[#737373] leading-[26px] font-normal font-inter">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
                </div>

                <div className="why-item md:flex lg:flex-row flex-col items-center">
                    <div className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 lg:gap-x-[103px] gap-y-[45px] lg:gap-y-[95px] lg:pr-[105px] md:pb-[30px] lg:pb-0">
                        <div className="1 flex flex-col items-center text-center md:items-start md:text-left">
                            <img src={why1} alt=""/>
                            <h1 className="text-[25px] text-[#151515] font-bold font-inter pb-[10px] pt-[20px]">Innovative Ideas</h1>
                            <p className="text-[16px] text-[#737373] leading-[26px] font-normal font-inter sm:px-4 md:px-0">Because each project is different, we adapt to your business model.</p>
                        </div>
                        <div className="1 flex flex-col items-center text-center md:items-start md:text-left">
                            <img src={why1} alt=""/>
                            <h1 className="text-[25px] text-[#151515] font-bold font-inter pb-[10px] pt-[20px]">Innovative Ideas</h1>
                            <p className="text-[16px] text-[#737373] leading-[26px] font-normal font-inter sm:px-4 md:px-0">Because each project is different, we adapt to your business model.</p>
                        </div>
                        <div className="1 flex flex-col items-center text-center md:items-start md:text-left">
                            <img src={why2} alt=""/>
                            <h1 className="text-[25px] text-[#151515] font-bold font-inter pb-[10px] pt-[20px]">Dedicated Support</h1>
                            <p className="text-[16px] text-[#737373] leading-[26px] font-normal font-inter sm:px-4 md:px-0">We provide 24/7 support for all our clients and serve them professionally.</p>
                        </div>
                        <div className="1 flex flex-col items-center text-center md:items-start md:text-left pb-[30px] md:pb-0">
                            <img src={why2} alt=""/>
                            <h1 className="text-[25px] text-[#151515] font-bold font-inter pb-[10px] pt-[20px]">Dedicated Support</h1>
                            <p className="text-[16px] text-[#737373] leading-[26px] font-normal font-inter sm:px-4 md:px-0">We provide 24/7 support for all our clients and serve them professionally.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-[35%]">
                        <img src={why} alt="" className='block ml-auto sm:ml-[18%] md:ml-0'/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Why