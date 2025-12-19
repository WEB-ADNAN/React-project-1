function Success(){

//     const head1 = document.getElementById('head1');
//         let count = 0;
//         let limit = 200;
//         let delay = 2000;

//         function startCounter() {
//         count = 0;
//         head1.innerHTML = count;

//         let counter = setInterval(() => {
//             count += 5;
//             head1.innerHTML = count;

//             if (count >= limit) {
//             clearInterval(counter);

//             setTimeout(startCounter, delay);
//             }
//         }, 50);
//     }

// startCounter();


    return(
        <>
        <section className="pb-[70px] lg:mb-[149px] px-4 md:px-0">
            <div className="container bg-[#E0FFF9] rounded-[20px]">
                <div className="lg:flex pt-[45px] md:pt-[50px] lg:pt-[85px] pb-[45px] md:pb-[50px] lg:pb-[86px] pl-[50px]">
                    <div className="w-full lg:max-w-[387px] mr-[124px]">
                        <h1 className="text-[25px] font-medium font-inter leading-[120%] text-[#6A4DF4] pb-[15px]">Our Success</h1>
                        <h2 className="text-[27px] md:text-[35px] text-[#151515] font-semibold font-inter">West cost Brand makers-Global Edge</h2>
                    </div>
                    <div className="flex sm:gap-[60px] md:gap-[200px] lg:gap-[120px] md:pt-[10px] lg:pt-0">
                        <div className="1">
                            <h1 id="head1" className="text-[32px] md:text-[50px] font-bold font-inter text-[#151515]">200<span>+</span></h1>
                            <p className="text-[#737373] pt-[8px] md:pt-[20px]">Customer Satisfied</p>
                        </div>

                        <div className="2">
                            <h1 className="text-[32px] md:text-[50px] font-bold font-inter text-[#151515]">4.5</h1>
                            <p className="text-[#737373] pt-[8px] md:pt-[20px]">200+ Avg rating</p>
                        </div>

                        <div className="3">
                            <h1 className="text-[32px] md:text-[50px] font-bold font-inter text-[#151515]">351+</h1>
                            <p className="text-[#737373] pt-[8px] md:pt-[20px]">Project Delivered</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Success