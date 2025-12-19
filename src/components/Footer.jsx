import logo2 from '@images/logo2.png'
function Footer(){
    return(
        <>
        <footer className="pt-[60px] lg:pt-[150px] px-4 md:px-2 lg:px-0">
            <div className="container lg:flex lg:flex-row flex-col gap-[131px] pb-[50px]">
                <div className="md:w-full lg:w-[30%] w-full pb-[30px] lg:pb-0">
                    <img src={logo2} alt="" />
                    <p className='text-[15px] md:text-[16px] leading-[26px] font-normal font-inter text-[#7B7B7B] pt-[30px]'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                </div>
                <div className="md:w-[70%] md:flex gap-[60px] md:gap-[131px] grid grid-cols-2">
                    <div className="1">
                        <h1 className='text-[20px] text-[#151515] font-semibold font-inter pb-[12px]'>About</h1>
                        <a href=""><p className='text-[16px] leading-[40px] font-normal font-inter text-[#7B7B7B] pb-[8px]'>About Us</p></a>
                        <a href=""><p className='text-[16px] leading-[40px] font-normal font-inter text-[#7B7B7B] pb-[8px]'>Features</p></a>
                        <a href=""><p className='text-[16px] leading-[40px] font-normal font-inter text-[#7B7B7B] pb-[8px]'>News</p></a>
                        <a href=""><p className='text-[16px] leading-[40px] font-normal font-inter text-[#7B7B7B]'>Careers</p></a>
                    </div>

                    <div className="1">
                        <h1 className='text-[20px] text-[#151515] font-semibold font-inter pb-[12px]'>Company</h1>
                        <a href=""><p className='text-[16px] leading-[40px] font-normal font-inter text-[#7B7B7B] pb-[8px]'>Our Team</p></a>
                        <a href=""><p className='text-[16px] leading-[40px] font-normal font-inter text-[#7B7B7B] pb-[8px]'>Partner With Us</p></a>
                        <a href=""><p className='text-[16px] leading-[40px] font-normal font-inter text-[#7B7B7B] pb-[8px]'>FAQ</p></a>
                        <a href=""><p className='text-[16px] leading-[40px] font-normal font-inter text-[#7B7B7B]'>Blog</p></a>
                    </div>

                    <div className="1">
                        <h1 className='text-[20px] text-[#151515] font-semibold font-inter pb-[12px]'>Support</h1>
                        <a href=""><p className='text-[16px] leading-[40px] font-normal font-inter text-[#7B7B7B] pb-[8px]'>About</p></a>
                        <a href=""><p className='text-[16px] leading-[40px] font-normal font-inter text-[#7B7B7B] pb-[8px]'>Support Center</p></a>
                        <a href=""><p className='text-[16px] leading-[40px] font-normal font-inter text-[#7B7B7B] pb-[8px]'>Feedback</p></a>
                        <a href=""><p className='text-[16px] leading-[40px] font-normal font-inter text-[#7B7B7B] pb-[8px]'>Contact Us</p></a>
                        <a href=""><p className='text-[16px] leading-[40px] font-normal font-inter text-[#7B7B7B]'>Accesbility</p></a>
                    </div>
                    <div className="1">
                        <h1 className='text-[20px] text-[#151515] font-semibold font-inter pb-[12px]'>Get in touch</h1>
                        <a href=""><p className='text-[16px] leading-[40px] font-normal font-inter text-[#7B7B7B] pb-[8px]'>info@gmail.com</p></a>
                        <a href=""><p className='text-[16px] leading-[40px] font-normal font-inter text-[#7B7B7B] pb-[8px]'>+88 0121 0212</p></a>
                    </div>
                </div>
            </div>

            <div className="container py-[33px] text-center border-t-1 border-[#E8E8E8]">
                <p className='text-[16px] text-[#D0D0D0] leading-[26px] font-normal font-inter'>All credit goes to @agence.com</p>
            </div>
        </footer>
        </>
    )
}
export default Footer