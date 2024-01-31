
import './Banner.css'
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

function Banner() {



    return (
        <div className='banner h-[600px] '>
            <div className='content pt-[250px]'>
                <h1 className=' film pl-10 font-extrabold text-6xl'>WALKING DEAD</h1>
            </div>
            <div className='discription max-w-[500px] pl-10 pt-4 font-medium'>
                <span className=''>
                    In the wake of zombie apocalypse, surviverse old on the hope of humanity
                     by banding together to wage a fightfor their own survival.
                    
                </span>
            </div>
            <div className='banner_button pl-10 flex pt-5'>
                <button className='button_play text-black bg-white w-[110px] h-[39px] rounded font-bold flex items-center justify-center transform transition-transform hover:scale-90'><FaPlay />Play</button>
                <button className='button_info ml-6 bg-gray-600 w-[120px] h-[39px] rounded font-bold flex items-center justify-center transform transition-transform hover:scale-90'><IoMdInformationCircleOutline size={25}/>More Info</button>
            </div>

        </div>
    )

}

export default Banner