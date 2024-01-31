import './NavBar.css'
import { FiSearch } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";

function NavBar() {
    return (
        <div className=' items-center  '>
            <div className='navbar fixed h-[67px] flex items-center space-x-4 w-full justify-between bg-black bg-opacity-0 ' >
                <div className="flex justify-between space-x-5">
                    <img className="logo ml-3 md:ml-5 w-[50px] h-[20px]  md:w-[80px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />

                    <ul className='list max-sm:hidden flex space-x-4 max-md:space-x-2 max-lg:text-xs'>
                        <li className='text-white font-sans'>Home</li>
                        <li className='text-white font-sans'>TV Shows</li>
                        <li className='text-white font-sans'>Movies</li>
                        <li className='text-white font-sans'>New & Popular</li>
                        <li className='text-white font-sans'>My list</li>
                        <li className='text-white font-sans'>Browse by Languages</li>
                    </ul>
                </div>
                <div className=' w-[150px] max-sm:w-[200px]  flex items-center'>
                    <div className='text-white mr-6 text-2xl'><FiSearch size={25}/></div>
                    <div className='text-white mr-6'><FaRegBell size={25}/></div>
                    <img className='avatar w-[32px]  md:mr-[100px] ' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar logo" />

                </div>
            </div>

            


        </div>
    )
}

export default NavBar