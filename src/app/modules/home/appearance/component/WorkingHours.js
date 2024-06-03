'use client'
import "../appearance.css"

const WorkingHours = ({schedule}) => {
    console.log({schedule});
  return (
    <>
   
    <div className="date__widget" dangerouslySetInnerHTML={{__html:schedule?.description}}>
      
    </div>


    </>
  )
}

export default WorkingHours
