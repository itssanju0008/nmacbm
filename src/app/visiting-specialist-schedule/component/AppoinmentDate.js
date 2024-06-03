import "./appoinmentdate.css"

const AppoinmentDate = () => {
  return (
    <>
    
        <div className="date__widget w-100">
            <h4>Book your Ultrasound with our Specialist!
</h4>

           <h5 className="appoinment-date">Ultrasound Dates : </h5>
            <ul className="p-0">
                <li>
                    <span>March </span>
                    <span> 22nd-25th</span>
                </li>
                <li>
                    <span>April </span>
                    <span>26th-29th</span>
                </li>
                <li>
                    <span>May </span>
                    <span>17th-20th</span>
                </li>
                <li>
                    <span>June </span>
                    <span> 21st-24th</span>
                </li>
                <li>
                    <span>July </span>
                    <span>26th-29th</span>
                </li>
                <li>
                    <span>October </span>
                    <span>24th - 29th</span>
                </li>
                <li>
                    <span>November</span>
                    <span>28th- Dec 3rd</span>
                </li>

                <li>
                    <span>January </span>
                    <span>2nd - 7th 2024</span>
                </li>
            </ul>
             <hr/>
            <div>
            <h5 className="appoinment-date">Hours of operation :  </h5>
            <ul className="p-0">
                <li>
                    <span>Mondays - Fridays  </span>
                    <span>8:00 am - 6:00pm</span>
                </li>
                <li>
                    <span>Saturdays </span>
                    <span>10:00am - 5:00pm</span>
                </li>
            </ul>
            </div>
        </div>
    </>
  )
}

export default AppoinmentDate
