import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './cards.css'

function Cards(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div className='ml-[20px]'>
            <h1 className='text-white pl-5 pb-4 font-semibold'>New Trending</h1>
            <div className=' card flex ml-[20px] overflow-x-scroll overflow-y-hidden'>
                    <img className=' movieImage h-[180px] w-[270] pb-10 mr-[10px] rounded ' onClick={handleOpen} src="netflix banner.webp" alt="Moveis" />
                    <img className=' movieImage h-[180px] w-[270] pb-10 mr-[10px] rounded'  onClick={handleOpen} src="netflix banner.webp" alt="Moveis" />
                    <img className=' movieImage h-[180px] w-[270] pb-10 mr-[10px] rounded'  onClick={handleOpen} src="netflix banner.webp" alt="Moveis" />
                    <img className=' movieImage h-[180px] w-[270] pb-10 mr-[10px] rounded'  onClick={handleOpen} src="netflix banner.webp" alt="Moveis" />
                    <img className=' movieImage h-[180px] w-[270] pb-10 mr-[10px] rounded'  onClick={handleOpen} src="netflix banner.webp" alt="Moveis" />
                    <img className=' movieImage h-[180px] w-[270] pb-10 mr-[10px] rounded'  onClick={handleOpen} src="netflix banner.webp" alt="Moveis" />
                    <img className=' movieImage h-[180px] w-[270] pb-10 mr-[10px] rounded'  onClick={handleOpen} src="netflix banner.webp" alt="Moveis" />
                    <img className=' movieImage h-[180px] w-[270] pb-10 mr-[10px] rounded'  onClick={handleOpen} src="netflix banner.webp" alt="Moveis" />
                    <img className=' movieImage h-[180px] w-[270] pb-10 mr-[10px] rounded'  onClick={handleOpen} src="netflix banner.webp" alt="Moveis" />
                    <img className=' movieImage h-[180px] w-[270] pb-10 mr-[10px] rounded'  onClick={handleOpen} src="netflix banner.webp" alt="Moveis" />
                    <img className=' movieImage h-[180px] w-[270] pb-10 mr-[10px] rounded'  onClick={handleOpen} src="netflix banner.webp" alt="Moveis" />
                    <img className=' movieImage h-[180px] w-[270] pb-10 mr-[10px] rounded'  onClick={handleOpen} src="netflix banner.webp" alt="Moveis" />
                    <img className=' movieImage h-[180px] w-[270] pb-10 mr-[10px] rounded'  onClick={handleOpen} src="netflix banner.webp" alt="Moveis" />
                    <img className=' movieImage h-[180px] w-[270] pb-10 mr-[10px] rounded'  onClick={handleOpen} src="netflix banner.webp" alt="Moveis" />

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
            <img src="netflix banner.webp" alt="" />
          </Typography>
        </Box>
      </Modal>
    </div>
        </div>
    )


}

export default Cards