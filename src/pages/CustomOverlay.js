import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import createPool from "../assets/images/8.png";
import '../pages/homestyle.css';
import mark from '../assets/images/icons/mark.png'
import girl from '../assets/images/icons/girl.png';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import Textarea from '@mui/joy/Textarea';
import CloseIcon from '@mui/icons-material/Close';
import IosShareIcon from '@mui/icons-material/IosShare';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const today = dayjs();
const tomorrow = dayjs().add(1, 'day');



function OverlayComponent() {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = () => {
    setShowOverlay(!showOverlay);
  }
  const [showOverlayOne, setShowOverlayOne] = useState(false);

  const handleClicks = () => {
    setShowOverlayOne(!showOverlayOne);
    setShowOverlay(false);
    setShowOverlayTwo(false);


  }
  const [showOverlayTwo, setShowOverlayTwo] = useState(false);

  const handleClickss = () => {
    setShowOverlayTwo(!showOverlayTwo);
    setShowOverlay(false);

  }
  const [value, setValue] = React.useState(dayjs('2022-04-17'));
  const isMobile = useMediaQuery('(max-width: 600px)');
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile ? '100%' : 530,
    height: isMobile ? '100%' : '90%',
    borderRadius: '15px',
    bgcolor: 'white',
      border: '2px solid #fff',
    boxShadow: 24,
    p:  isMobile ? 1 : 3,
  };
    const styleOne = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: isMobile ? '100%' : 530,
      height: isMobile ? '100%' : '70%',
      borderRadius: '15px',
      bgcolor: 'white',
      //   border: '2px solid #000',
      boxShadow: 24,
      p:  isMobile ? 1 : 3,
    };
    const styleS = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: isMobile ? '100%' : 550,
      height: isMobile ? '100%' : '70%',
      borderRadius: '15px',
      bgcolor: 'white',
      // border: '2px solid #000',
      boxShadow: 24,
      p: 3,
    };
  
      const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openOne, setOpenOne] = React.useState(false);
    const handleOpenOne = () => {
      handleClose();
      setOpenOne(true);

    };
    const handleCloseOne = () => setOpenOne(false);


    const [openTwo, setOpenTwo] = React.useState(false);
    const handleOpenTwo = () => {
      handleCloseOne();
      setOpenTwo(true);

    };
    const handleCloseTwo = () => setOpenTwo(false);
    

  return (
    <div>
          <div onClick={handleOpen} className="d-flex align-items-center gap-2">
                                <img width={30} src={createPool} alt="" />
                                <div>
                                  <p className="text-text">
                                    {("Create Pool")}
                                  </p>
                                  <div
                                    className="subtitle"
                                    style={{ fontSize: "12px" }}
                                  >
                                    {("Create Pool")}
                                  </div>
                                </div>
          </div>
          <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="flex">

<div className="overlay-content">


  <div className="row mb-3 padding-ov">
  <div className='text-right w-100'>  <CloseIcon className='close' onClick={handleClose} ></CloseIcon></div>


    <div className='text-center mb-3'>
      <img src={girl} alt="girl" className="girl" />

    </div>
    <div className='mb-3'> 
    <p className='md text-center'>Buy any NFT listed fixed price with the community</p>
    <input type="text" value={0x37068cf3ff902f517b76fd0118ab40959880d808/245} className="form-control input-font-ui border-ui input-number"
      />
    <p className='sm text-left   className="mb-5'>Enter OpenSea listing at a fixed price.</p>

    </div>

    <div className='mb-3' >
      <p className="md bold-lg text-left ">Duration</p>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker', 'DatePicker']}>
          <DatePicker label="Start" defaultValue={dayjs('2022-04-17')} />
          <DatePicker
            label="End"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </DemoContainer>
      </LocalizationProvider>  
    </div>
    <div className='mb-3'>
      <p className="text-left sm">Description</p>
      <div className='mb-3'>
        <Textarea className="border-ui"minRows={2} />
      </div>


    </div>
    <div>
      <button onClick={handleOpenOne} className="btn btn-ui rounded-md w-100 mb-2 " >
        CREATE POOL
      </button>
      <button  className="btn btn-ui-muted rounded-md w-100 mb-3" >
        Cancel
      </button>



    </div>


  </div>
</div>
   
</Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openOne}
        onClose={handleCloseOne}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openOne} className="flex">
          <Box sx={styleOne} className="relative">


<div className="row  padding-ov">
<div className=' cross mb-3 text-right'>  <CloseIcon className='close' onClick={handleCloseOne} ></CloseIcon></div>

  <div className=' mb-3'> 
    <p className='font-ui-cl padding-top' >APPROVE POOL</p>


  </div>

  <div className=" mb-5 d-flex between ">
                <div className='d-flex between'>
                    <a>
                      <img src={'https://i.seadn.io/gcs/files/6ad18b0e2c45c7f1eda6be028f3d931a.png?auto=format&w=1000'}alt="nft image" style={{ height: '70px', borderRadius: '10px' , margin:'10px' }} />
                    </a>

                  <div className="m-t">
                    <p className="md bold-lg">Kidzoki#257</p>
                    <p className="sm bold-md">kidzoki Georil</p>
                    <p className="sm">rarity #124 </p>


                  </div>



              </div>


              <div className="">
              <p className="md ">3 ETH</p>

              <p className="sm">7 days duration</p>
                <p className="sm">$5764 USD</p>
                <p className='sm'> Total 100 Shares</p>
              </div>
            </div>
            <hr />
  <div className='mb-5'>
    <p className='bold-md'>Go to your wallet
</p>
<p className='sm'>You'll be asked to approve this pool from your wallet.</p>
  </div>


  <div className="mb-3">
  <button onClick={handleOpenTwo} className="btn btn-ui w-100 mt-3" >
     Approve
    </button>
    <button onClick={handleOpenTwo} className="btn btn-ui-muted w-100 mt-3" >
     Cancel Pool
    </button>


  </div>


</div>
</Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openTwo}
        onClose={handleCloseTwo}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openTwo}>
        <Box sx={styleOne} className="relative flex">


<div className="row  padding-ov">
<div className=' cross mb-3 text-right'>  <CloseIcon className='close' onClick={handleCloseTwo} ></CloseIcon></div>

          <p className='text-center md-lg bold-md mb-3 mbm-5'>Congratulations!</p>
          <div className='text-center mb-3'>
            <img src={girl} alt="girl" className="girl bd-radius mb-3" />

          </div>
          <div className="ow mb-3 mbm-5">
            <p className='md  text-center bold-lg mb-3 '> <span><img src={mark} width={30} alt="" /></span> Your pool is complete & live now</p>

          </div>
          <div className="mb-5 text-center">
            <span className='md border-ui text-center bold-lg mb-5 '> Pool ID</span>

          </div>
          <div className='d-flex text-center w-100 ui-icon  mb-3 mbm-5'>
          <i class=" uil-facebook-f"></i>
                <i class=" uil-instagram"></i>


                <i class=" uil-twitter"></i>
                <i class=" uil-copy-link"></i>

          </div>


          <div>
            <button onClick={handleClicks} className="btn btn-ui rounded-md w-100" >
              View  POOL
              listing
            </button>


          </div>


        </div>
</Box>
        </Fade>
      </Modal>
    </div>

  );
}
export default OverlayComponent;
