import React from 'react';
import {BiCopyAlt} from 'react-icons/bi';
import {BiShareAlt} from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { AiOutlineClose } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ShareModel = ({ visible, onClose }) => {
    
    const Url = (window.location.href);
    const CopyToClipboard = () => {
        
        navigator.clipboard.writeText(Url);
        toast.success(' Url Copied!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    
    const HandleonClose = (event) => {

        if (event.target.id === "modal")

            onClose();
    }
    if (!visible) return null;
    return (
        <div>
           
            <ToastContainer />
            <div onClick={HandleonClose} id="modal" className="fixed flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm  p-4  inset-0  w-full h-full">
                <div className=" relative items-center w-full max-w-md md:h-auto">
                    <div className="relative top-1/3 bg-white rounded-lg shadow dark:bg-gray-700">
                       
                        <button onClick={onClose} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" >
                            <AiOutlineClose className="w-5 font-bold h-5" />
                        </button>
                        
                        <div className="p-6 text-center">
                        <h2 className='font-bold text-left'>Share</h2>
                            <div className='text-blacbold"k my-5  h-10 rounded-full overflow-hidden flex  items-center bg-white' >
                                <div className=" justify-start bg-white" style={{border: '1px solid rgba(0, 0, 0, 0.08)'}} >
                                    <h3 className='text italic' >{Url}</h3>
                                </div>
                               
                                <button onClick={CopyToClipboard} className=' absolute right-[10px] px-1 h-8  hover:scale-125'><BiCopyAlt className=' text-2xl mx-6'/></button>
                                <button className=' absolute right-[10px] px-1 h-8  hover:scale-125'><BiShareAlt className='text-2xl'/></button>
                               

                            </div>
                            <div className="flex space-evenly text-3xl mb-3 ">
                                <FaFacebookSquare className='m-2 hover:scale-125 rounded-full text-blue-500' />
                                <BsLinkedin className='m-2 hover:scale-125 rounded-full text-blue-500' />
                                <BsWhatsapp className='m-2  hover:scale-125 rounded-full text-green-500' />
                                <FaTwitter className='m-2 hover:scale-125 rounded-full text-blue-500' />
                                <SiGmail className='m-2 hover:scale-125  rounded-full text-gray-500' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShareModel