import {IoMdArrowBack, IoMdArrowForward} from 'react-icons/io';
import galleryImageOne from './assets/galleryImageOne.png';
import galleryImageTwo from './assets/galleryImageTwo.jpg';
import galleryImageThree from './assets/galleryImageThree.jpg';
import galleryImageFour from './assets/galleryImageFour.webp';
import mainGalleryOne from './assets/mainGalleryOne.webp';
import mainGalleryOneExt from './assets/mainGalleryOneExt.webp';
import mainGalleryTwo from './assets/mainGalleryTwo.webp';
import mainGalleryThree from './assets/mainGalleryThree.png';
import mainGalleryFour from './assets/mainGalleryFour.jpeg';



export const navBarData = {
    items: [
        {link: '/', name: 'Home'},
        {link: '/about', name: 'About'},
        {link: '/gallery', name: 'Gallery'},
        {link: '/reviews', name: 'Reviews'},
        {link: '/openingtimes', name: 'Opening Times'},
        {link: '/contact', name: 'Contact'},
    ]
}

export const aboutData = {
    name: 'Joseph Ray',
    title: 'My Story',
    subtitle: 'Finding Out Who I Am',
    preview: 'It was not my plan to become a tattoo artist, but here I am. My journey started when I wanted to cover some life altering scars, and the level of understanding I wanted? I was unable to to find it.',
    btnText: 'Read More', btnLink: './about',
    nextBtn: <IoMdArrowForward />,
    backBtn: <IoMdArrowBack />,
    moreAboutMe: 'Growing up, I never really thought I was different until I was about 12 years old. I played football in school, I hung out with the other boys in my neighbourhood after school. We climbed trees, played baseball and roller hockey. I was just one of the guys. Until I wasn\'t. It was around 12 years old that my mom started to tell me I shouldn\'t be climbing trees or playing football. I was growing up and these things weren\'t appropriate for a girl. It may seem silly that I had never really considered gender until I was 12 years old. But for me, it was simple, it had never been an issue. I was a boy. Although, now, I found out, that my parents and society as a whole thought otherwise. There is a long story between that confused 12 year old and where I am today, but the outcome is that today I am a man who is confortable in his own body, thanks in large part to surgeons and a tattoo artist who was, possibly quite literally one in 5 million. I have scars from top and bottom surgery. For those of you who don\'t know waht those things are, a quick google search should fill you in. I wanted them covered. I wanted to take my shirt off at the beach. But as I searched for a tattoo artist, the number out there who I felt comfortable talking about my experiences with or who had any experience covering scars of this nature were few and far between. In fact, in my search, I found one. One amazing woman, and to get to her, I had to fly to the other side of the country. So, long story short, she gave me some amazing tattoos and the desire to be able to do this for other people. To cover their scars and help them heal in a safe place where someone can truly say they understand.'
}

export const heroImageData = {
    quote: 'Tattoos are my way of expressing myself without the need for words.',
    author: '-Jay Park',
}


export const galleryPreviewData = {
    title: 'My Work',
    text: 'Please note, the photos shown below are strictly of those customers who have explicitly agreed to have their tattoos shared. I will NEVER share your photos without your permission.',
    images: [
        {name: galleryImageOne, title: 'Geometric Design', aboutImage: '', moreInfoBtnText: 'About'},
        {name: galleryImageTwo, title: 'Phoenix', aboutImage: '', moreInfoBtnText: 'About'},
        {name: galleryImageThree, title: 'Flowers', aboutImage: '', moreInfoBtnText: 'About'},
        {name: galleryImageFour, title: 'Octopus', aboutImage: '', moreInfoBtnText: 'About'}
    ],
    galleryBtnTxt: 'Go to Gallery',
}

export const testimonialsPreviewData = {
    testimonialTitle: 'Testimonials',
    testimonials:[ {testimonial: 'I was scared to get this tattoo done for ages and I kept putting it off, but my son is starting schhol soon and I was worried his friends would start to ask questions about my arm. I wish I hadn\'t hesotated. Joseph put me at ease straight away. He modified my design to conceal my scar in the best way possible and I love it. I will be abck to get the scars on my chest covered!',
    name: 'Michael',
    }, 
    {testimonial: 'I\'ve been to Josepsh for a few tattoos now. It started with a cover up of my key hole surgery scar and now he\'s the only artist I will go to. Whether it\'s a cover up or not!', name: 'Sam'}

    ],
    testimonialsBtnText: 'Go to Testimonials',
}

export const mainGalleryData = {
    title: 'Tattoo Gallery',
    notice: 'I have additional photographs of tattoos that past clients are happy to share images of with prospective clients, but would rather these photographs were not available online. Please contact me if you would like to see these images.',
    images: [
        {image: mainGalleryOne, label: 'A work in progress', modalPic: mainGalleryOneExt, modalText: 'Once healed, we will be finishing up the coloring and doing a little retouching on some of the areas with thicker scar tissue.'},
        {image: mainGalleryTwo , label: 'Nipple Pigmentation', modalPic: mainGalleryTwo, modalText: 'Using tattooing, we can even out the coloring and shape of nipples affected by surgery.'},
        {image: mainGalleryThree, label: 'Caterpillar Cover', modalPic: mainGalleryThree, modalText: 'You don\'t always need to go big to get the cover you want. This fairly small tattoo does its job and leaves real estate for later additions.'},
        {image: mainGalleryFour , label: 'Roses and Crowns', modalPic: mainGalleryFour, modalText: 'Using shading to minimize the concave appearance of scars.'},
        // {image:'' , label: '', modalPic: '', modalText: ''},
        // {image:'' , label: '', modalPic: '', modalText: ''},
    ]
}

export const reviewData = {
    reviews:[
    {name: 'Emery',
    review: 'I came in to get a tattoo to cover the scar on my arm from surgery. It is a big scar and evertime I looked at it, I felt dysphoric. It is also not easy to hide, especially in warmer weather as it is on my forearm. Joseph was fantastic. He put me at ease straight away and did a cracking job of disguising my scar. I can now look at my arm and if other people are looking, it is because of the tattoo and not the scar. I cannot tell you what a difference this has made to my anxiety levels, confidence and life in general. Those who have undergone gender reassignmnet surgery will understand the sheer relief I feel.',
    artist: 'Joseph'},
    {name: 'Skylar',
    review: 'I got a tattoo to cover self inflicted scars from a time in my life that I was very low. There was no judgement from Joseph. He was totally respectful and did a great job in making my arm something I am now proud to look at.',
    artist: 'Joseph'},
    {name: 'Michael',
    review: 'I was scared to get this tattoo done for ages and I kept putting it off, but my son is starting schhol soon and I was worried his friends would start to ask questions about my arm. I wish I hadn\'t hesotated. Joseph put me at ease straight away. He modified my design to conceal my scar in the best way possible and I love it. I will be abck to get the scars on my chest covered!',
    artist: 'Joseph'
    },
    {name: 'Sam',
    review: 'I\'ve been to Josepsh for a few tattoos now. It started with a cover up of my key hole surgery scar and now he\'s the only artist I will go to. Whether it\'s a cover up or not!',
    artist: 'Joseph'},
    {name: 'Amy',
    review: ' I didn\'t honestly think there was a way for me to fel better about my chest after surgery. Although my breasts were reconstructed, I lost a nipple and found it hard to look at my scar everyday. Joseph has completley changed this. I now love looking at my chest. I can say with 100% certainty that my chest is unique AND beautiful.',
    artist: 'Joseph'},
    {name: 'Claire',
    review: 'Although my surgical scar was hidden as it\'s on my stomach, my children often comment on it when I\'m getting changed and although I could avoid mirrors, I couldn\'t avoid my kids and I hated being reminded of it. The kids now talk about how pretty mommy\'s belly is and I\'m no longer avoiding mirrors, I\'m seeking them out instead!',
    artist: 'Joseph'},
    {name: 'Joy',
    review: ' I had a long keloid scar on my stomach from an op and because of how raised it was, I didn\'t think it would be able to be hidden in a tattoo. I was wrong and boy am I glad that I was wrong. By confidence has sky rocketed and I\'m back to loving the beach!',
    artist: 'Joseph'},
    {name: 'Marcus',
    review: 'I went a slighty different route with my top surgery scars. I like to see them as a reminder of where Iv\'e been and how far I have come. Plus I\'m \'out\' all over YouTube so discretion wasn\'t a concern for me. There was no judgement from Joseph and he helped me to take a vague idea and turn it into a work of art that I am proud to have etched on my body and to look at every day.',
    artist: 'Joseph'},
    ]
}




export const contactData = {
    title: 'Get in Touch',
    subtitle: 'The best way to contact me is through this form. To see more photos of my work or to discuss your needs, please drop me a line and I will get back to you. I aim to respond within 72 hours.',
    location: 'Location',
    state:'San Francisco, California, USA',
    notice: 'Exact location is my home address and will be shared with customers on consultation.', 
}

export const formData = {
    formTitle: 'Get in Touch',
    nameLabel: 'Name: ',
    emailLabel: 'Email: ',
    phoneNumberLabel: 'Phone: ',
    messageLabel: 'Message: ',
    sendBtnText: 'Send'
}

export const openingTimes = {
    title: 'Opening Times',
    subtitle: 'Our opening times are listed below. Please note, I cannot take walk ins due to the nature of the work.',
    days:[
        {day: 'Monday:', hours: 'CLOSED'},
        {day: 'Tuesday:', hours: '10:00 - 13:00 and 14:00 - 17:00'},
        {day: 'Wednesday:', hours: '10:00 - 13:00 and 14:00 - 17:00'},
        {day: 'Thursday:', hours: '10:00 - 13:00 and 14:00 - 19:00'},
        {day: 'Friday:', hours: '10:00 - 13:00 and 14:00 - 19:00'},
        {day: 'Saturday:', hours: '10:00 - 14:00'},
        {day: 'Sunday:', hours: 'CLOSED'}
    ]
}

export const footerData = {
    title: 'Lost your way? Let us help you out',
    items: [
        {link:'/', name: 'Home'},
        {link: '/about', name: 'About'},
        {link: '/gallery', name: 'Gallery'},
        {link: '/reviews', name: 'Reviews'},
        {link: '/openingtimes', name: 'Opening Times'},
        {link: '/contact', name: 'Contact'},
    ]
}