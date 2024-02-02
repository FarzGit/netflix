/* eslint-disable react/prop-types */
import Youtube from 'react-youtube'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './cards.css'
import axios from '../../axios'

import {imageUrl,API_KEY}from '../../constants/constants'
import { useEffect, useState } from 'react';


function Cards(props){
    const [open, setOpen] = useState(false);
    const [urlId , setUrlId] = useState("")
    const handleClose = () => setOpen(false);
    const [moveis,setMoveis] = useState([])

    useEffect(()=>{ 
      axios.get(props.url).then(response=>{
        console.log('response :',response.data)
        setMoveis(response.data.results)
      })

    },[])
    const handleOpen = (id) => {
      setOpen(true);
      console.log(id)
      axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{

        if(response.data.results.length !==0){
        setUrlId(response.data.results[0])

        }
      })
      }

    console.log('movies :' , moveis)

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return(
      
        <div className='ml-[20px]'>
            <h1 className='text-white pl-5 pb-4 font-semibold pt-5'>{props.title}</h1>
            <div className=' card flex ml-[20px] overflow-x-scroll overflow-y-hidden'>

              {moveis.map((obj,i)=>
                    <img key={i} className=' movieImage h-[180px] w-[270] pb-10 mr-[10px] rounded ' onClick={()=>handleOpen(obj.id)} src={`${imageUrl+obj.backdrop_path}`} alt="Moveis" />

              )}
                    

            </div>


            <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Box className="modal">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Trailer
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               { urlId && <Youtube videoId={urlId.key} opts={opts}/>}
          </Typography>
        </Box>
      </Modal>
    </div>
        </div>
    )


}

export default Cards