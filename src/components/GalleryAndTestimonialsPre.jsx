import React from 'react';
import './galleryAndTestimonialsPre.css';
import { testimonialsPreviewData, galleryPreviewData } from '../data';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const { testimonialTitle, testimonials, testimonialsBtnText } = testimonialsPreviewData;
  const { title, text, images, galleryBtnTxt } = galleryPreviewData;
  const navigate = useNavigate();

  const handleGalleryClick = () => {
    navigate("/gallery")
  }

  const handleTestimonialClick = () => {
    navigate("/reviews")
  }
  return (
    <div className='galleryContainer'>
      <h3 className="myWorkTitle">{title}</h3>
      <p className="myWorkText">{text}</p>
      <div className="imagesPreview">
        <div className="tattooImages">
          {images.map((image, index) => {
            return(
              <img key={index} className="galleryPreviewImage" src={image.name} alt="tattoo" />
            )
          })}
        </div>
        <button className="goToGalleryBtn" onClick={handleGalleryClick}>{galleryBtnTxt}</button>
      </div>
      <div className="testimonialsPreview">
        <h3 className="testimonialTitle">{testimonialTitle}</h3>
        <div className="testimonialClips">
          {testimonials.map((testimonial, index) => {
            return (
              <div className="testimonialTextContainer" key={index}>
                <p className="testimonialText">{testimonial.testimonial}</p>
                <p className="testimonialAuthor">{testimonial.name}</p>
              </div>
            )
          })}
          <button className="goToTestimonialsBtn" onClick={handleTestimonialClick}>{testimonialsBtnText}</button>

        </div>
      </div>

    </div>
  )
}

export default Gallery
