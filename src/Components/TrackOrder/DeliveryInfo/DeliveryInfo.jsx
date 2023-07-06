import delivery_man from "../../../assets/images/delivery_icons/delivery_man.png";
import helmet from "../../../assets/images/delivery_icons/helmet.png";
import { Button } from '@mui/material';
// import { localStorageHandler } from '../../../assets/FakeData/FakeData';
// import {  useState } from 'react';
import * as React from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const DeliveryInfo = ( {delivery} ) => {

 const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
        <div className='col bg-gray-100 lg:order-none order-first space-y-5 px-4 lg:py-6 py-5 rounded-xl mx-auto w-full sm:max-w-[30rem] max-w-[26rem] lg:max-w-[21rem]'>
            <div className='space-y-2.5'>
                {/* Delivery_man Img */}
                <div className='pl-5'>
                    <img className='max-h-20' src={delivery_man} alt="delivery-man" />
                </div>
                {/* Locations Info */}
                <div className='p-3.5 bg-white rounded-lg'>
                    <div className="space-y-4">

                        {[{ id: 1, title: 'Shop Location', location: delivery.restaurant_location },
                        { id: 0, title: 'Your Location', location: delivery.customer_location }
                        ].map(step => (

                            <div key={step.id} className="flex space-x-2.5 items-center">
                                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                <div className="mt-auto space-y-">
                                    <h5 className='font-sans text-sm font-semibold'>{step.title}</h5>
                                    <p className='text-xs text-gray-500'>{step.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='space-y-4'>
                {/* Estimated Time
                <div className='space-y-0.5'>
                    <h1 className='lg:text-3xl text-2xl'>09:30</h1>
                    <p className='text-xs text-gray-500'>Estimated delivery time</p>
                </div> */}

                {/* Rider Info */}
                <div className='flex align-middle space-x-4 py-2.5 px-2.5 bg-white h-16 rounded-lg'>
                    {/* Rider_img */}
                    <div>
                        <img className='max-h-11 my-auto' src={helmet} alt="rider" />
                    </div>
                    {/* Rider_name */}
                    <div>
                        <h5 className='font-sans font-semibold'>Hasan</h5>
                        <p className='text-xs text-gray-500'>Your rider</p>
                    </div>
                </div>
            </div>

            {/* Contact */}
            <div>
                {/* click to  redirect Hasan's mail */}
                {/* hasan.webdev1@gmail.com */}
                {/* <a href="mailto:hasan.webdev1@gmail.com">
                    <Button fullWidth
                        color='error'
                        variant='contained'>
                        Contact
                    </Button>
                </a> */}
                <Button fullWidth
                        color='error'
                        variant='contained'
                        onClick={handleOpen}>
                        Contact
                        </Button>
                     <Modal
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="keep-mounted-modal-title"
                        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style} >
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            <h2>Contact details:</h2>
          </Typography>
          <Typography id="keep-mounted-modal-description " sx={{ mt: 2 }}>
           <strong>Phone Number:</strong> +230 55555555
<br></br>
          <strong>Email Address:</strong> hasan.webdev1@gmail.com
<br></br><br></br>
<p className="text-red-500 hover:underline">If you want to cancel your order please call at +230 51236478</p>
          </Typography>
        </Box>
      </Modal>
            </div>
        </div>
    );
};

export default DeliveryInfo;