import { useState } from "react";

import Header from "./Component/Header";
import UserInput from "./Component/UserInput";
import Result from "./Component/Result";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const inputIsValid = userInput.duration >= 1;

    function handleChange(inputId, newValue) {
        setUserInput((prevRes) => {
            return {
                ...prevRes,
                [inputId]: +newValue,
            };
        });
    }

    return (
        <>
            <Header />
            <UserInput userInput={userInput} onChange={handleChange} />
            {inputIsValid ? (
                <Result input={userInput} />
            ) : (
                <p className="center">
                    Please enter a duration grater than zero.
                </p>
            )}
        </>
    );
}

export default App;
