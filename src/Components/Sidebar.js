import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import logo from '../assets/imgs/logo.png';
import editicon from '../assets/imgs/editicon.png';
import mobileNavIcon from '../assets/imgs/mobile-nav-icon.svg';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Sidebar() {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='d-flex'>

            {isMobile ? <><img className='p-20' src={mobileNavIcon} alt="logo" onClick={handleShow} />

                <Offcanvas show={show} onHide={handleClose} >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>BOT AI</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className=''>

                            <button className='w-100 newChat-btn'>
                                <img src={logo} alt="logo" /> <span className='pl-10'>New Chat</span>  <img className='pl-10' src={editicon} alt="editicon" />
                            </button>

                            <div className='my-20 mx-20'>
                                <button className='pastconversation-btn w-100'>
                                    Past Conversation
                                </button>

                            </div>

                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </>

                :
                <div className='sidenav'>

                    <button className='w-100 newChat-btn'>
                        <img src={logo} alt="logo" /> <span className='pl-10'>New Chat</span>  <img className='pl-10' src={editicon} alt="editicon" />
                    </button>

                    <div className='my-20 mx-20'>
                        <button className='pastconversation-btn w-100'>
                            Past Conversation
                        </button>

                    </div>

                </div>


            }


            <div className='mx-20 header py-20'>
                <h3 className='logo-text'>Bot AI</h3>
            </div>
        </div>
    )

}