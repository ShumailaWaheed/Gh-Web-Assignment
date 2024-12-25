import Image from 'next/image';

const HomeSection = () => {
  return (
    <section className="relative z-0 w-full overflow-hidden bg-opacity-75 bg-center bg-no-repeat bg-cover bg-[url('/images/bg-cover.jpg')] h-auto md:h-auto">
      <div className="absolute inset-0 z-10 h-full w-full bg-zinc-100 bg-opacity-80"></div>
       <div className="container mx-auto max-w-[1920px] px-4 py-16 md:flex md:justify-between md:items-center relative z-20">
        <div className="h-fit w-full pt-1 md:pt-5 md:w-1/2 md:py-10 bg-opacity-70 px-4 rounded-lg text-center md:text-left"> 
          <h2 className="text-[2.2rem] md:text-[2.5rem] font-extrabold leading-10 sm:text-5xl tracking-wider lg:text-6xl text-[rgb(4,78,131)] mb-4 whitespace-nowrap"> 
            Governor Sindh
          </h2>
          <h3 className="text-[1.7rem] md:text-[1.8rem] font-normal md:text-3xl leading-[2rem] sm:text-4xl lg:text-[2.5rem] text-[rgb(4,78,131)] mb-4"> 
            Kamran Khan Tessori
          </h3>
          <p className="mt-4 md:mt-5 text-[1.5rem] md:text-[2rem] font-extrabold leading-[2rem] sm:leading-[3rem] lg:text-[2.5rem] text-cyan-500 mb-4"> 
            Certified Cloud <br /> Applied Generative <br /> AI Engineer (GenEng)
          </p>
          <h4 className="my-4 md:my-5 text-[1.5rem] md:text-[1.5rem] text-[rgb(4,78,131)] font-extrabold text-main md:w-[80%]">
            Earn up to $5,000/month
          </h4>
          <h5 className="my-4 md:my-5 text-[1.5rem] md:text-[1.5rem] text-[rgb(4,78,131)] font-extrabold text-main md:w-[80%]">
            Now admissions are open in Hyderabad
          </h5>
          <div className="mt-4 md:mt-6 flex flex-col md:flex-row items-center space-x-4 justify-center md:justify-start w-full"> 
            <button
              className="w-full xl:w-[35%] md:w-[60%] px-10 py-3 md:px-14 md:py-4 lg:text-[1rem] text-[1.2rem] md:text-[1rem] bg-[rgb(4,78,131)] text-white font-extrabold rounded hover:scale-105 hover:shadow-2xl touch:scale-105 touch:shadow-2xl"
              aria-label="Apply Now Button"
            >
              Apply Now
            </button>
            <div className="w-full md:w-40 text-center text-[1.5rem] md:text-[1.5rem] text-[rgb(4,78,131)] font-extrabold mb-4">
              562,143
              <div className="text-center text-[rgb(4,78,131)] text-lg text-main sm:mb-0 sm:text-sm">
                Accepted Applications
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-7 md:mt-0 flex justify-center md:justify-end">
          <Image
            src="/images/Hero-01.png"
            alt="Governor Sindh Kamran Khan Tessori"
            width={800}
            height={700} 
            className="object-cover lg:w-[100%] mr-[-170px] lg:h-[700px] md:h-[650px] mb-[-70px] h-[500px]" 
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
