'use client'
import { useEffect, useState } from 'react';
import './appearance.css';
import WorkingHours from './component/WorkingHours';
import Link from "next/link"
import authApi from '@/Api/authApi';

const Appearance = () => {
  const [schedule,setSchedule]=useState(null);
  const getSchedule=async()=>{
    try {
      const res=await authApi.get(`visiting-specialists`);
      setSchedule(res?.data[res?.data?.length-1])
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getSchedule();
  },[])


  return (
    <>
      <section className='appearance-bg py-6'>
         <div className='side-space'>
            <div className='row'>
                <div className='col-xl-8 col-lg-7 col-md-12'>
                    <div className='appearance-content'>
                        <h3>Trust Your Appearance to Us </h3>
                        <p className='mt-3 mt-lg-4 mb-0'>Choose The Right Procedure For You</p>

                        <div className='text-center mt-3 mb-4 mt-lg-5 mb-lg-0'>
                            <Link href="#" className="btn black-btn">Book Consultation</Link>
                        </div>
                    </div>
                </div>

                <div className='col-xl-4 col-lg-5 col-md-12'>
                    <WorkingHours schedule={schedule} /> 
                </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default Appearance
