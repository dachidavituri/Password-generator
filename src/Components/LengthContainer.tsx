import "./LengthCont.css";

interface LengthProps {
  passwordLength: number;
  setPasswordLength: React.Dispatch<React.SetStateAction<number>>;
}
function LengthContainer({ passwordLength, setPasswordLength }: LengthProps) {
  return (
    <div className="length-container">
      <div className="length">
        <h3>Character Length</h3>
        <h2>{passwordLength}</h2>
      </div>
      <input
        type="range"
        className="custom-range slider"
        onChange={(e) => setPasswordLength(+e.target.value)}
        max={20}
        step={1}
        value={passwordLength}
      />
    </div>
  );
}
export default LengthContainer;
