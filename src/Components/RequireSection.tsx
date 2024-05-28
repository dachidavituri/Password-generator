import { ChangeEvent } from "react";
import "./Require.css";
import checkSvg from "../assets/icon-check.svg";
interface IsCheckedState {
  inclUppercase: boolean;
  inclLowercase: boolean;
  inclNumber: boolean;
  incSymbol: boolean;
}

interface RequireProps {
  isChecked: IsCheckedState;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  includeLength: number;
}
function Require({
  isChecked,
  handleCheckboxChange,
  includeLength,
}: RequireProps) {
  let cubeClass: string;
  if (includeLength === 1) {
    cubeClass = "red";
  } else if (includeLength === 2) {
    cubeClass = "orange";
  } else if (includeLength === 3) {
    cubeClass = "yellow";
  } else if (includeLength === 4) {
    cubeClass = "green";
  }
  const cubes = Array.from({ length: 4 }, (_, index) => (
    <div
      key={index}
      className={`cube ${index < includeLength ? cubeClass : ""}`}
    ></div>
  ));

  return (
    <div className="require-container checkboxes ">
      <label htmlFor="inclUppercase" className="checkboxLabel">
        <input
          type="checkbox"
          name="inclUppercase"
          id="inclUppercase"
          checked={isChecked.inclUppercase}
          onChange={handleCheckboxChange}
        />
        Include Uppercase Letters
        <span className="checkmark">
          <img
            src={checkSvg}
            alt="checked-icon"
            className="check-icon"
            style={{
              display: isChecked.inclUppercase ? "block" : "none",
            }}
          />
        </span>
      </label>
      <label htmlFor="inclLowercase" className="checkboxLabel">
        <input
          type="checkbox"
          name="inclLowercase"
          id="inclLowercase"
          checked={isChecked.inclLowercase}
          onChange={handleCheckboxChange}
        />
        Include LowerCase Letters
        <span className="checkmark">
          <img
            src={checkSvg}
            alt="checked-icon"
            className="check-icon"
            style={{
              display: isChecked.inclLowercase ? "block" : "none",
            }}
          />
        </span>
      </label>
      <label htmlFor="inclNumber" className="checkboxLabel">
        <input
          type="checkbox"
          name="inclNumber"
          id="inclNumber"
          checked={isChecked.inclNumber}
          onChange={handleCheckboxChange}
        />
        Include Numbers
        <span className="checkmark">
          <img
            src={checkSvg}
            alt="checked-icon"
            className="check-icon"
            style={{ display: isChecked.inclNumber ? "block" : "none" }}
          />
        </span>
      </label>
      <label htmlFor="incSymbol" className="checkboxLabel">
        <input
          type="checkbox"
          name="incSymbol"
          id="incSymbol"
          checked={isChecked.incSymbol}
          onChange={handleCheckboxChange}
        />
        Include Symbols
        <span className="checkmark">
          <img
            src={checkSvg}
            alt="checked-icon"
            className="check-icon"
            style={{ display: isChecked.incSymbol ? "block" : "none" }}
          />
        </span>
      </label>
      <div className="strength-container">
        <h2 className="strength">STRENGTH</h2>
        <div className="indicators">
          <h2 className="strength-name">
            {includeLength == 1
              ? "TOO WEAK!"
              : includeLength == 2
              ? "WEAK"
              : includeLength == 3
              ? "MEDIUM"
              : includeLength == 4
              ? "STRONG"
              : ""}
          </h2>
          <div>{cubes}</div>
        </div>
      </div>
    </div>
  );
}
export default Require;
