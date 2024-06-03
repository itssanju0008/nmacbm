'use client'
import BannerSlider from "./modules/home/banner/Banner"
import Facilities from "./modules/home/facilities/Facilities"
import Service from "./modules/home/services/Service"
import Slider from "./modules/home/slider/Slider"
import Calculater from "./modules/home/calculater/Calculator"
import Faq from "./modules/home/Faq/Faq"
import Team from "./modules/home/team/Team"
import Testimonial from "./modules/home/testimonials/Testimonial"
import Video from "./modules/home/video/Video"
import Appearance from "./modules/home/appearance/Appearance";
import Gallery from "./modules/home/gallery/Gallery"
import Blog from "./modules/home/blog/Blog";

export default function Home() {
  return (
    <main>
        <Slider/>

        <BannerSlider/>

        <Service/>

        <Facilities/>

        <Calculater/>

        <Faq/>

        <Team/>    

        <Testimonial/>
        
        {/* <Video/> */}

        <Gallery/>

        <Appearance/>

        <Blog/>
    </main>
  )
}
