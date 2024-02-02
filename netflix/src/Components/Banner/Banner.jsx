
import './Banner.css'
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import axios from '../../axios'
import { useEffect,useState } from 'react';
import {API_KEY,imageUrl} from '../../constants/constants'

function Banner() {

  const [movie,setMovie] = useState([])

useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((response)=>{
        const randomIndex = Math.floor(Math.random() * response.data.results.length)
        // console.log(response.data.results[12])
        setMovie(response.data.results[randomIndex])
    })
},[])
// console.log('movei' , movie)

    return (
            <div className='banner h-[575px]'style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}} >
            <div className='content pt-[250px]'>
                <h1 className=' film pl-10 font-extrabold text-6xl'>{ movie?movie.title:""}</h1>
            </div>
            <div className='discription max-w-[500px] pl-10 pt-4 font-medium'>
                <span className=''>
                    {movie.overview}
                    
                </span>
            </div>
            <div className='banner_button pl-10 flex pt-5'>
                <button className='button_play text-black bg-white w-[110px] h-[39px] rounded font-bold flex items-center justify-center transform transition-transform hover:scale-90'><FaPlay />Play</button>
                <button className='button_info ml-6 bg-gray-600 w-[120px] h-[39px] rounded font-bold flex items-center justify-center transform transition-transform hover:scale-90'><IoMdInformationCircleOutline size={25}/>More Info</button>
            </div>

            <div className="fade"></div>

        </div>
    )

}

export default Banner