import React from "react";

const CompnayPolice = ({ data }) => {
  return (
    <div className="py-6">
      <div className="row">
        <div className="col-lg-12 col-md-12 m-auto">
          <div className="company-police about-info">
            <h3 className="mb-3"> Company Policies </h3>

            <div className="company-police-info mt-4">
              <h4 className="mb-2">{data?.title}</h4>
              <p>
                <div
                  dangerouslySetInnerHTML={{ __html: data?.description }}
                ></div>{" "}
              </p>
            </div>
            {data?.policy &&
              JSON.parse(data?.policy)?.map((row, index) => (
                <div className="company-police-info-second  mt-3" key={row?.id}>
                  <p>
                    {" "}
                    <span className="mb-2 compnay-title">
                      {" "}
                      <span className="text-skyblue">{row?.title}</span> {" "}
                    </span>
                    {row?.description}{" "}
                  </p>
                </div>
              ))}

            {/* <div className="company-police-info-second  mt-3">
              <p>
                <span className="mb-2 compnay-title">
                  Cancellation <span className="text-skyblue">Policy </span> :{" "}
                </span>{" "}
                For individual appointments, cancellation with less than 24
                hours’ notice, the client will be subject to forfeiting their
                booking deposit.
              </p>
            </div>

            <div className="company-police-info-second  mt-3">
              <p>
                <span className="mb-2 compnay-title">
                  No Show <span className="text-skyblue">Policy </span> :{" "}
                </span>{" "}
                Clients that are a no show to their appointment, will be subject
                to forfeiting their booking deposit.
              </p>
            </div>

            <div className="company-police-info-second  mt-3">
              <p>
                <span className="mb-2 compnay-title">
                  Excessive <span className="text-skyblue">Rescheduling </span>{" "}
                  :{" "}
                </span>{" "}
                Reschedules that exceed 2 consecutive times{" "}
                <b>for the same appointment</b>, the client will be subject to
                forfeiting their booking deposit.
              </p>
            </div>

            <div className="company-police-info-second  mt-3">
              <p>
                <span className="mb-2 compnay-title">
                  Credit Card <span className="text-skyblue">Hold </span> :{" "}
                </span>{" "}
                For customers who have missed two or more appointments without
                notifying the spa (no show), who are continually unable to
                adhere to our 24 hour cancellation policy or consecutively
                reschedules appointments for the same service, we will require a
                credit card to hold future appointments. A cancellation fee
                might be charged.
              </p>
            </div>

            <div className="company-police-info-second  mt-3">
              <p>
                <span className="mb-2 compnay-title">
                  Complimentary <span className="text-skyblue">Services </span>{" "}
                  :{" "}
                </span>{" "}
                No shows or same day cancellations that are less 12 hours of the
                appointment time, to re-book there will be a $50 fee.
              </p>
            </div>

            <div className="company-police-info-second  mt-3">
              <p>
                {" "}
                <span className="mb-2 compnay-title">
                  Late <span className="text-skyblue"> Arrivals </span> :{" "}
                </span>
                We understand that some things happen outside of the client’s
                control that make the client late to their appointment. We will
                do everything we can to accommodate the client. However, if you
                are running more than 5 minutes late, we may need to offer you a
                shorter service or reschedule your appointment to accommodate
                all our clients with the full NMAC experience. Please let us
                know as soon as possible that you are running late so we can
                best accommodate everyone. If we must reschedule an appointment,
                the client will forfeit the booking deposit.
              </p>
            </div>

            <div className="company-police-info-second  mt-3">
              <p>
                {" "}
                <span className="mb-2 compnay-title">
                  Pre-purchased <span className="text-skyblue"> Packages </span>{" "}
                  :{" "}
                </span>
                No show and less than 24 hours’ notice client forfeit 50% of one
                (1) service in their package. For example, package of 3
                Microderm $405 package, $135 single service thus the client will
                forfeit $67.50.
              </p>
            </div>

            <div className="company-police-info-second  mt-3">
              <p>
                {" "}
                <span className="mb-2 compnay-title">
                  Appointment <span className="text-skyblue"> Reminders </span>{" "}
                  :{" "}
                </span>
                All clients are offered email and telephone reminders for your
                appointments which are sent out approximately 24 hours before
                your appointment.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompnayPolice;
