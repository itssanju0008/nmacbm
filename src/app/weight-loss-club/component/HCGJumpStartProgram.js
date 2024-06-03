import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import VideoCard from "../../shared/VideoCard";



const HCGJumpStartProgram = () => {

  const HCGVideo = [
    {
      id: 1,
      title: 'Video Title',
      videoUrl: "https://www.youtube.com/embed/sRTJv--hOuw?si=2YMLpjgeTcYYfUIo",
      isYouTube: true,
    },
    {
      id: 2,
      title: 'Video Title',
      videoUrl: "https://www.youtube.com/embed/RxvzRUzf71s?si=SCkpJBVotb-A2Ntx",
      isYouTube: true,
    },
  ];

  return (
    <>
      <section>
        <div>
          <div className="all-common-heading mb-4">
            <h3>Jump Start Program </h3>
            <div className="line"></div>
          </div>

          <div className="hcg-jump">
            <p>
              Dr. Simeons&#39; HCG diet plan has been around since 1953. It is
              effective because of the way the HCG interacts with the body&#39;s
              abnormal fat stores. It alters the dieter&#39;s perception of
              hunger while on a low calorie diet. It also generates the
              opportunity for the low calorie diet to result in weight loss
              instead of starvation.
            </p>
            <p>
              HCG is a naturally occurring hormone Human Chorionic Gonadotropin.
              It is found in pregnant women and is very important in order to
              sustain the pregnancy. HCG is what triggers the hypothalamus to
              mobilize stored fat into the bloodstream and to protect your
              body&#39;s good fat while preventing muscle tissue from breaking
              down. Researchers have found that by administering HCG in small
              doses, it decreases abnormal body fat which aids in weight loss.
              When combined with a medically-supervised, healthy, low calorie
              diet the weight loss is greater.
            </p>
            <p>
              The program is limited to 500 to 800 calories in Phase One. For
              example, you will have the choice of one protein: steak, fish,
              turkey, chicken breast, crab, shrimp or lobster; one vegetable:
              tomatoes, celery, spinach, chard, fennel, onions, radishes and
              cabbage; one fruit: apple, orange, strawberries or grapefruit.
            </p>
          </div>

          <div className="mt-5">
            <div className="all-common-heading mb-4">
              <h3>Some Side Effects Associated With The Hcg Diet Include</h3>
              <div className="line"></div>
            </div>

            <div className="hcg-info">
              <ul className="patient-info-list">
                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Irregular menses
                </li>
                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Migraine headache exacerbation
                </li>
                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Rare allergic reaction and edema
                </li>
                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Rare temporary hair loss
                </li>
                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Worsening or improving of acne
                </li>
              </ul>
              <h4 className="mt-4">
                The HCG is ideal for men because it causes no adverse effects.
                Men tend to lose more while on the program.
              </h4>
              <h4>Average Weight Loss for Men - 35 to 45 lbs</h4>
              <h4>Average Weight Loss for Females - 15 to 25 lbs</h4>
              <p className="mt-3">The program consists of two phases :</p>
              <p>
                <b>Phase I : </b> (26 - 40 days) HCG Injections with diet.
              </p>
              <p>
                <b>Phase II : </b> Maintenance/Reset the Body&#39;s Metabolism.
              </p>
            </div>

            <div className="mt-5">
              <div className="all-common-heading mb-4">
                <h3>Video </h3>
                <div className="line"></div>
              </div>
              <div>
              <div className="video-section">
                <div className="video-row">
                {HCGVideo.map((patientdata) => (
                      <VideoCard  key={patientdata.id} patientdata={patientdata} />
                    ))}
                  </div>

                 
             </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HCGJumpStartProgram;
