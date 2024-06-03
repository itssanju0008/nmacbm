import React from 'react';
import BannerSection from '@/app/shared/BreadCrum';
import VideoCard from './component/Video';

const Video = () => {
  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Videos",
   
  };

  const Video = [
    {
      id: 1,
      title: 'Dry January \'Popular Sleep Health Trend: \'Sleep Girl Mocktail\' Dr Katherine Dale',
      name:'Dr Katherine Dale',
      videoUrl: "https://www.youtube.com/embed/yJvbSk3xQIk?si=mDWhqKJAEdqqA9W3",
    },
    {
      id: 2,
      title: 'New Year\s Detox',
      name:'New Year\s Detox with Dr Katherine Dale',
      videoUrl: "https://www.youtube.com/embed/Y7g3UrnlP10?si=YjAaiVRzXLfIzrtq",
    },

    {
      id: 3,
      title: 'Dr. Katherine Dale',
      name:'Ms Thang on Power 95 Radio Bermuda Interviews Dr Katherine Dale, Naturopathic Doctor.',
      videoUrl: "https://www.youtube.com/embed/rTVfu47N94o?si=6gDFH0wBtIeXjNBe",
    },

    {
      id: 4,
      title: 'Performing a Colon Hydrotherapy on Patient',
      name:'Seeing is believing! We decided to show you how simple it is to get a colon hydrotherapy to help you do your cleanse. See how the water pushes out the waste in the intestines. Book your treatment today!',
      videoUrl: "https://www.youtube.com/embed/8W0gTIx_Opk?si=RC9V1ox3VE91xuVa",
    },
  ];


  return (
  <>
    {/* banner */}
      <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} />
    {/* banner */}
      
    <section className='side-space py-6'>
      <div className='row'>
          {Video.map((videodata) => (
              <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 '  key={videodata.id}>
                  <VideoCard  videodata={videodata} />
              </div>
            ))}
         
      </div>
    </section>
    </>
  )
}

export default Video
