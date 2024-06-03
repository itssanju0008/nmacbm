import "./facilities.css";
import Link from "next/link";
import Image from "next/image";
import FacilitiesIconCard from "./component/FacilitiesIconCard";

const cardData = [
    {
      iconSrc: '/icon/shake-hand.png',
      iconAlt: 'Icon',
      title: '10+',
      description: 'Years Of Exp.',
    },
    {
      iconSrc: '/icon/female-trunk.png',
      iconAlt: 'Icon',
      title: '258K',
      description: 'Improved Bodies',
    },

    {
        iconSrc: '/icon/customer.png',
        iconAlt: 'Icon',
        title: '100%',
        description: 'Happy Clients',
      },

      {
        iconSrc: '/icon/doctor.png',
        iconAlt: 'Icon',
        title: '52',
        description: 'Surgical Specialist',
      },

    
  ];

const Facilities = () => {
  return (
    <>
      <section className="bg-blue py-6">
          <div className="side-space">
            <div className="row align-items-center">
                 <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="facilities-content">
                       
                          <h4 className="facilities-title-1">Facilities</h4>
                          <h3 className="facilities-title-2 mt-5">Know what facilities we have</h3>

                          <p className="mt-3 mt-md-4 mb-0">Providing compassionate and efficient care to patients is at the core of all our efforts.</p>
                          <p className="mt-3 mt-md-4 mb-0">We are known for achieving natural-looking cosmetic improvements and for using advanced systems to 
                            rejuvenate aging or damaged skin.</p>

                            <div className="facilities-list">
                                <ul>
                                    <li>EXCELLENT LABORATERY</li>
                                    <li>WORLD CLASS INFRASTRUCTURE</li>
                                    <li>PHARMACY</li>
                                    <li>COSMETIC SURGEONS</li>
                                    <li>HEALTH CHECKUPS</li>
                                </ul>
                            </div>

                            <div className="mtop-2">
                                <Link className="btn btn-red" href="#"> Book Online</Link>
                            </div>
                       </div>
                 
                 </div>

                 <div className="col-xl-6 col-lg-6 col-md-12" >
                    <div className="facilities-banner" style={{width:'fit-content'}}>
                        <Image src="/all/Facilities-1.png" alt="Facilities"  width={432} height={706} />
                        <Image src="/all/Facilities.png" alt="Facilities" width={327} height={588} />
                    </div>
                  </div>

                <div className="col-xl-2 col-lg-12 col-md-12">
                    <div className="facilities">
                    {cardData.map((card, index) => (
                        <FacilitiesIconCard key={index} data={card} />
                    ))}
                    </div>
                </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Facilities
