import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"; 
import { MdOutlineEmail } from "react-icons/md"; 

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-16 px-6 mt-20">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-12 space-y-12 sm:space-y-0">
        <div>
          <h3 className="text-xl font-bold mb-4">Core Courses</h3>
          <ul className="list-none space-y-4">
            <li>Programming Fundamentals</li>
            <li>Web2 Using NextJS</li>
            <li>Earn as You Learn</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Advanced Courses</h3>
          <ul className="list-none space-y-4">
            <li>Web 3 and Metaverse</li>
            <li>Cloud-Native Computing</li>
            <li>Artificial Intelligence (AI) and Deep Learning</li>
            <li>Ambient Computing and IoT</li>
            <li>Genomics and Bioinformatics</li>
            <li>Network Programmability and Automation</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Social Links</h3>
          <div className="flex space-x-2 mt-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaFacebook size={35} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 p-2 rounded-full bg-blue-400">
              <FaTwitter size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-800 p-2 rounded-full bg-pink-600">
              <FaInstagram size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-800 p-2 rounded-full bg-red-600">
              <FaYoutube size={18} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-600 p-2 rounded-full bg-black">
              <FaTiktok size={18} />
            </a>
          </div>
          <div className="flex items-center mt-8 space-x-2">
            <MdOutlineEmail size={20} className="text-blue-800" />
            <span className="text-blue-800 xl:text-lg text-sm"> education@governorsindh.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
