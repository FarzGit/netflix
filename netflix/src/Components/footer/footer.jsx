import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import './footer.css'


function Footer() {


    return (
        <div className=' h-[350px] pt-14  mt-16'>
            <div className='member'>
                <diV className="flex ml-[100px] pl-[100px] mr-[100px] pr-[100px] pb-3 space-x-5" >
                    <h1><FaFacebookF color="white" size={25} /></h1>
                    <h1><FaInstagram color="white" size={25} /></h1>
                    <h1><FaTwitter color="white" size={25} /></h1>
                    <h1><FaYoutube color="white" size={25} /></h1>

                </diV>
                <div className=' grid ml-[100px] pl-[100px] mr-[100px] pr-[100px]'>
                    <div className="list-row">
                        <li className="list-item">Audio Description</li>
                        <li className="list-item">Help Center</li>
                        <li className="list-item">Gift Cards</li>
                        <li className="list-item">Media Center</li>
                    </div>
                    <div className="list-row">
                        <li className="list-item">Investor Relations</li>
                        <li className="list-item">Jobs</li>
                        <li className="list-item">Terms of Use</li>
                        <li className="list-item">Privacy</li>
                    </div>
                    <div className="list-row">
                        <li className="list-item">Legal Notices</li>
                        <li className="list-item">Cookie Preferences</li>
                        <li className="list-item">Corporate information</li>
                        <li className="list-item">Contact Us</li>
                    </div>
                </div>
                <div className="ml-[100px] pl-[100px] mr-[100px] pr-[100px]">
                    <button className=" border border-gray-500 footer_button p-1 mt-5 ">Service Code</button>
                </div>
                <div className="ml-[100px] pl-[100px] mr-[100px] pr-[100px] pt-5">
                    <span className="footer_copyright text-sm">&#xa9; 1997-2024 Netflix,Inc.</span>
                </div>
            </div>
        </div>
    )

}

export default Footer


