import Image from "next/image";

const CloudGenerativeAISection = () => {
  return (
    <section className="bg-white text-black py-4 px-4 mt-10 ">
      <div className="max-w-screen-[1920px] mx-auto text-center">
        <h2 className="text-2xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-[rgb(4,78,131)]">
          Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs
        </h2>
        <p className="sm:mt-10 mt-7 mb-8 xl:text-[1.25rem] sm:text-[1.2rem] text-[1rem] text-zinc-800 text-justify px-6">
          The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are 
          winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, 
          and massive distribution networks. Solopreneurs trained in this program will win by automating work typically 
          outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing 
          vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. 
          This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs 
          will adopt the ultra-lean business model and work independently and will not need to hire employees or other 
          team members.
         </p>

         <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10 lg:grid-cols-3 sm:m-0">
          <div className="rounded-lg h-[250px] sm:h-[300px] relative">
            <Image
              src="/images/cloud-01.jpg"
              layout="fill" 
              objectFit="cover" 
              alt="AI Infrastructure"
              className="shadow-2xl shadow-black rounded-lg"
            />
          </div>
          <div className="rounded-lg h-[250px] sm:h-[300px] relative">
            <Image
              src="/images/cloud-02.jpg"
              layout="fill"
              objectFit="cover"
              alt="Automation and Lean Business"
              className="shadow-2xl shadow-black rounded-lg"
            />
          </div>
          <div className="rounded-lg h-[250px] sm:h-[300px] relative">
            <Image
              src="/images/cloud-03.jpg"
              layout="fill"
              objectFit="cover"
              alt="Building Vertical Metaverses"
              className="shadow-2xl shadow-black rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudGenerativeAISection;

