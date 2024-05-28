import "./Button.css";
interface ButtonProps{
  generatePassword: () => void
}
function Button({generatePassword}: ButtonProps) {
  return <button onClick = {generatePassword}>
    GENERATE
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg>
  </button>;
}
export default Button;
