import React, { useState } from "react";
import "./bmicalculator.css";
import { MdArrowRightAlt } from "react-icons/md";


const BmiCalculator = () => {
  const [selectedUnit, setSelectedUnit] = useState("metric");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBmi = () => {
    const heightInMeters =
      selectedUnit === "metric" ? parseFloat(height) / 100 : convertFeetAndInchesToMeters(height);

    const weightInKg =
      selectedUnit === "metric" ? parseFloat(weight) : convertPoundsToKilograms(weight);

    const calculatedBmi = weightInKg / (heightInMeters * heightInMeters);

    setBmi(calculatedBmi.toFixed(2));
  };

  const handleUnitChange = (unit) => {
    setSelectedUnit(unit);
    setHeight("");
    setWeight("");
    setBmi(null);

    const inputs1 = document.getElementById("inputs1");
    const inputs2 = document.getElementById("inputs2");

    if (unit === "us") {
      inputs1.style.display = "none";
      inputs2.style.display = "block";
    } else {
      inputs1.style.display = "block";
      inputs2.style.display = "none";
    }
  };

  const convertFeetAndInchesToMeters = (height) => {
    const [feet, inches] = height.split("'");
    const totalInches = parseInt(feet) * 12 + parseInt(inches);
    return totalInches * 0.0254;
  };

  const convertPoundsToKilograms = (weight) => {
    return parseFloat(weight) * 0.453592;
  };

  return (
    <>
      <div className="shortcode_vc_text bmi-form-col py-6  px-md-3" id="bmiForm">
        <div className="bmi-form-col-inside">
          <div className="title-wrap">
            <div className="h-sub-lined bmi-para mb-2">Get your BMI</div>
            <h2 className="bmi-heading pt-0">BMI Calculator</h2>
          </div>
          <p className="mt-2 bmi-para">
            Your treatment options depend on how much you weigh. You can calculate your BMI using this simple tool:
          </p>
          <div className="bmi-form">
            <div className="unit-selector row">
              <div className="col-auto">
                <input
                  id="unitsMetric"
                  checked={selectedUnit === "metric"}
                  name="units"
                  type="radio"
                  value="metric"
                  onChange={() => handleUnitChange("metric")}
                />
                <label htmlFor="unitsMetric">Metric</label>
              </div>
              <div className="col-auto">
                <input
                  id="unitsUS"
                  checked={selectedUnit === "us"}
                  name="units"
                  type="radio"
                  value="us"
                  onChange={() => handleUnitChange("us")}
                />
                <label htmlFor="unitsUS">US</label>
              </div>
            </div>

            <div id="inputs1">
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <input
                      id="bmiHeight"
                      className="form-control required"
                      type="text"
                      placeholder="Height"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      pattern={selectedUnit === "metric" ? "[0-9]+(?:.[0-9]*)?" : "([0-9]+)'(?:([0-9]+)\"?)?"}
                    />
                    <span className="input-unit">cm</span>
                  </div>
                  <div className="col">
                    <input
                      id="bmiWeight"
                      className="form-control required"
                      type="text"
                      placeholder="Weight"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      pattern="[0-9.]+"
                    />
                    <span className="input-unit">kg</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="inputs2" style={{ display: selectedUnit === "us" ? "block" : "none" }}>
              <div className="form-group">
                <div className="row">
                <div className="col">
                <input
                  id="bmiHeight"
                  className="form-control required"
                  type="text"
                  placeholder="Height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  pattern={selectedUnit === "metric" ? "[0-9]+(?:.[0-9]*)?" : "([0-9]+)'(?:([0-9]+)\"?)?"}
                />
                <span className="input-unit">ft&#39; in &quot; (e.g. 5&#39;8&quot;)</span>
              </div>
              <div className="col">
                <input
                  id="bmiWeight"
                  className="form-control required"
                  type="text"
                  placeholder="Weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  pattern="[0-9.]+"
                />
                <span className="input-unit">lbs</span>
              </div>
                </div>
              </div>
            </div>

            <div className="form-group mb-0 mt-3">
              <div className="row align-items-center">
                <div className="col">
                  <button
                    id="bmiCalculate"
                    className="btn btn-skyblue-fill"
                    onClick={calculateBmi}
                  >
                    <span className="ch">Calculator <MdArrowRightAlt style={{fontSize:'24px'}}/>
</span>
                  </button>
                </div>
                <div className="col-auto pl-0">
                  <div className="bmi-result">
                    Your BMI is: <span id="bmi">{bmi !== null ? bmi : "__"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bmi-form-table">
            <div className="bmi-class-1">
              <span className="ch">BMI &gt; 18.5</span>
              <br />
              <span className="bmi-form-table-info">UNDERWEIGHT</span>
            </div>
            <div className="bmi-class-2">
              <span className="ch">18.5 – 24.9</span>
              <br />
              <span className="bmi-form-table-info">HEALTHY</span>
            </div>
            <div className="bmi-class-3">
              <span className="ch">25 – 29.9</span>
              <br />
              <span className="bmi-form-table-info">OVERWEIGHT</span>
            </div>
            <div className="bmi-class-4">
              <span className="ch">30 &lt; BMI</span>
              <br />
              <span className="bmi-form-table-info">OBESE</span>
            </div>
          </div>

          <p className="bmi-para"> We recommend you speak to your doctor if your BMI is above 25. </p>
        </div>
      </div>
    </>
  );
};

export default BmiCalculator;
