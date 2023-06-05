import React, { useState } from 'react';
import './mainGallery.css'
import { mainGalleryData } from '../data';

const MainGallery = () => {
    const { title, notice, images } = mainGalleryData;
    const [ showMoreInfo, setShowMoreInfo ] = useState(false)
    const [ modalData, setModalData ] = useState(null)

  return (
    <>
    <div className='mainGalleryContainer'>
        <h2 className="galleryTitle">{title}</h2>
        <p className="noticeText">{notice}</p>
        <div className="galleryImages">
            {images.map((image, index) => {
                return(
                    <div className="tattooImageBox" key={index} onClick={()=> setModalData(image)}>
                        <img className="tattooImage" src={image.image} key={index} alt="tattoo" onClick={()=> setShowMoreInfo(true)}/>
                        <p className="tattooLabel">{image.label}</p>
                    </div>
                )
            })}
                    
                    {showMoreInfo ? (
                        <div className='showMoreInfo'>
                            <img className="moreInfoPic" src={modalData.modalPic != undefined || null ? modalData.modalPic : modalData.image} alt="tattoo" />
                            <p className='modalText'>{modalData.modalText}</p>
                
                            <button className="closeMoreInfo" onClick={() => setShowMoreInfo(false)}>Close</button>
                
                        </div>) : null}
        </div>
          
    </div>

    </>
  )
}

export default MainGallery
