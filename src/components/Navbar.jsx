import logo from '@images/logo.png'
import { useEffect, useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
function Navbar(){
    const [menuShow, setMenuShow] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    useEffect(()=>{
        const scrollhandle = ()=>{
            setIsSticky(window.scrollY > 60)
        }
        window.addEventListener('scroll', scrollhandle)
        return window.addEventListener('scroll', scrollhandle)
    })
    return(
        <>
        <nav className={`fixed duration-500 transition-all ease-in-out ${isSticky ? 'bg-[rgba(61,31,96,0.93)] py-[15px]' : 'bg-transprant md:pt-[57px]'} pt-[30px] w-full z-1 px-4 md:px-2 lg:px-0`}>
            <div className="container ">
                <div className="flex items-center">
                    <div className="md:w-[20%] w-1/2">
                        <div className="img">
                            <a href="">
                                <img src={logo} alt="" />
                            </a>
                        </div>
                    </div>

                    <div className='md:hidden w-[45%] flex justify-end'>
                        <FaBarsStaggered onClick={()=> setMenuShow(true)}   className='text-[30px] text-[#6A4DF4] cursor-pointer'/>
                    </div>

                    <div className="mobile-menu md:hidden">
                        <div className={`fixed top-0 right-0 flex flex-col bg-[rgba(87,70,106,0.93)] h-full justify-center items-center gap-5 duration-500 transition-all ease-in-out ${menuShow ? 'w-[200px] sm:w-full opacity-100' : 'w-0 opacity-0'}`}>
                            <div>
                                <IoCloseSharp onClick={()=> setMenuShow(false)} className='text-[35px] sm:text-[45px] text-white absolute top-5 right-5 cursor-pointer'/>
                            </div>
                            <ul className='flex flex-col gap-5'>
                                <li><a href="" className='text-[25px] leading-[26px] font-normal text-[#FFFFFF] font-inter hover:text-[#4756DF] hover:font-bold hover:duration-500'>Home</a></li>
                                <li><a href="" className='text-[25px] leading-[26px] font-normal text-[#FFFFFF] font-inter hover:text-[#4756DF] hover:font-bold hover:duration-500'>About</a></li>
                                <li><a href="" className='text-[25px] leading-[26px] font-normal text-[#FFFFFF] font-inter hover:text-[#4756DF] hover:font-bold hover:duration-500'>Service</a></li>
                                <li><a href="" className='text-[25px] leading-[26px] font-normal text-[#FFFFFF] font-inter hover:text-[#4756DF] hover:font-bold hover:duration-500'>Careers</a></li>
                                <li><a href="" className='text-[25px] leading-[26px] font-normal text-[#FFFFFF] font-inter hover:text-[#4756DF] hover:font-bold hover:duration-500'>Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-[60%] hidden md:block">
                        <div className="item">
                            <ul className='flex gap-[65px] md:gap-[45px] lg:gap-[65px] justify-center'>
                                <li><a href="" className='text-[18px] leading-[26px] font-normal text-[#FFFFFF] font-inter hover:text-[#4756DF] hover:font-bold hover:duration-500'>Home</a></li>
                                <li><a href="" className='text-[18px] leading-[26px] font-normal text-[#FFFFFF] font-inter hover:text-[#4756DF] hover:font-bold hover:duration-500'>About</a></li>
                                <li><a href="" className='text-[18px] leading-[26px] font-normal text-[#FFFFFF] font-inter hover:text-[#4756DF] hover:font-bold hover:duration-500'>Service</a></li>
                                <li><a href="" className='text-[18px] leading-[26px] font-normal text-[#FFFFFF] font-inter hover:text-[#4756DF] hover:font-bold hover:duration-500'>Careers</a></li>
                                <li><a href="" className='text-[18px] leading-[26px] font-normal text-[#FFFFFF] font-inter hover:text-[#4756DF] hover:font-bold hover:duration-500'>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-[20%] hidden md:block">
                            <a href="" className='text-[20px] text-[#FFFFFF] leading-[26px] font-inter font-semibold px-[42px] py-[15px] bg-[#6A4DF4] rounded-[10px]'>Contact</a>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Navbar