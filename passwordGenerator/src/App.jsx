/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setLength] = useState(10);

  const [password, setPassword] = useState("");
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const chars = ",!@#$%&{}[]/*-_";

    if (numbersAllowed) string += numbers;
    if (charsAllowed) string += chars;

    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * string.length + 1);
      let randomChar = string.charAt(randomIndex);

      pass += randomChar;
    }

    setPassword(pass);
  }, [numbersAllowed, charsAllowed, length]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numbersAllowed, charsAllowed, setPassword, generatePassword]);
  return (
    <div>
      <div className="mx-auto max-w-md bg-slate-700 rounded mt-5 px-2 py-4">
        <h1 className="text-center">Password Generator</h1>
        <div>
          <input
            type="text"
            className="w-4/5 mt-2 ml-2 mr-2 py-1 px-2 rounded-sm text-black"
            placeholder="Password"
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button
            className="text-orange-500 py-1 px-3 bg-black  rounded-lg"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex mt-2 gap-3">
          <div>
            <input
              type="range"
              min={6}
              max={20}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="numberLength">Length {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={(e) => {
                setNumbersAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberLength">Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={(e) => {
                setCharsAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberLength">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
