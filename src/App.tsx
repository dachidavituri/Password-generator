import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import PasswordSection from "./Components/passwordSection";
import LengthContainer from "./Components/LengthContainer";
import Require from "./Components/RequireSection";
import Button from "./Components/Button";
import { lettersArr } from "./data";
import { uppercaseLettersArr } from "./data";
import { charArr } from "./data";
import { numberArr1 } from "./data";

function App() {
  const [isChecked, setIsChecked] = useState({
    inclUppercase: false,
    inclLowercase: false,
    inclNumber: false,
    incSymbol: false,
  });
  const [passwordLength, setPasswordLength] = useState<number>(0);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setIsChecked((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };
  const includesArr = Object.fromEntries(
    Object.entries(isChecked).filter(([key, value]) => value === true)
  );
  const includeLength = Object.keys(includesArr).length;
  const [randomPassword, setRandomPassword] = useState<string>("");

  const generatePassword = () => {
    const lowercaseLetters = lettersArr.join("");
    const uppercaseLetters = uppercaseLettersArr.join("");
    const numbers = numberArr1.join("");
    const symbols = charArr.join("");
    let selectedChars = "";
    let newPassword = [];
    if (isChecked.inclLowercase && newPassword.length < passwordLength) {
      const randomIndex = Math.floor(Math.random() * lowercaseLetters.length);
      newPassword.push(lowercaseLetters[randomIndex]);
      selectedChars += lowercaseLetters;
    }
    if (isChecked.inclUppercase && newPassword.length < passwordLength) {
      const randomIndex = Math.floor(Math.random() * uppercaseLetters.length);
      newPassword.push(uppercaseLetters[randomIndex]);
      selectedChars += uppercaseLetters;
    }
    if (isChecked.inclNumber && newPassword.length < passwordLength) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      newPassword.push(numbers[randomIndex]);
      selectedChars += numbers;
    }
    if (isChecked.incSymbol && newPassword.length < passwordLength) {
      const randomIndex = Math.floor(Math.random() * symbols.length);
      newPassword.push(symbols[randomIndex]);
      selectedChars += symbols;
    }

    while (newPassword.length < passwordLength) {
      const randomIndex = Math.floor(Math.random() * selectedChars.length);
      newPassword.push(selectedChars[randomIndex]);
    }
    newPassword = newPassword.sort(() => Math.random() - 0.5);
    setRandomPassword(newPassword.join(""));
  };

  return (
    <div className="App">
      <div className="container">
        <h2>Password Generator</h2>
        <PasswordSection randomPassword={randomPassword} />
        <div className="password-settings">
          <LengthContainer
            passwordLength={passwordLength}
            setPasswordLength={setPasswordLength}
          />
          <Require
            isChecked={isChecked}
            handleCheckboxChange={handleCheckboxChange}
            includeLength={includeLength}
          />
          <Button generatePassword={generatePassword} />
        </div>
      </div>
    </div>
  );
}

export default App;
