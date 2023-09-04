import React from "react";
import { useState, type FC } from "react";
import { Button } from "../../../../components/Button/Button";
import { Input } from "../../../../components/Input/Input";
import "./home.css";

export const HomeComponent: FC = () => {
  const [arrayInput, setArrayInput] = useState<string>("");
  const [targetInput, setTargetInput] = useState<string>("");
  const [result, setResult] = useState<number[][]>([]);

  const handleArrayInput = (data: string) => {
    const regex = /^[-0-9,]+$/;
    if (regex.test(data)) {
      setArrayInput(data);
    }
  };

  const handleTargetInput = (data: string) => {
    const regex = /^[0-9]+$/;
    if (regex.test(data)) {
      setTargetInput(data);
    }
  };

  const getSum = () => {
    const array = arrayInput.split(",");
    const numberArray = array.map((numero) => Number(numero));
    const target = Number(targetInput);
    const resultData = findPairsWithSum(numberArray, target);
    setResult(resultData);
  };

  const findPairsWithSum = (numbers: number[], targetSum: number) => {
    const seenNumbers = new Set();
    const pairs = [];

    for (const num of numbers) {
      const complement = targetSum - num;
      if (seenNumbers.has(complement)) {
        pairs.push([num, complement]);
      }
      seenNumbers.add(num);
    }

    return pairs;
  };

  console.log(result);

  return (
    <div className="home-container">
      <div className="home-input-container">
        <Input
          value={arrayInput}
          label="Array"
          onChange={handleArrayInput}
          className="array-input"
          placeholder="1,2,5,3,-5"
        />
        <Input
          value={targetInput}
          label="target"
          onChange={handleTargetInput}
          className="target-input"
          placeholder="12"
        />
      </div>
      <div className="home-result">
        {result.length > 0 ? (
          <div className="result-container">
            {result?.map((data, key) => {
              return (
                <div
                  className="result-container"
                  key={key}
                  style={{
                    borderColor: "black",
                    border: "solid",
                    padding: "5px",
                  }}
                >
                  {data.map((number, key) => {
                    return <div key={key}>{number}</div>;
                  })}
                </div>
              );
            })}
          </div>
        ) : (
          <div> Results </div>
        )}
      </div>
      <Button label="Get sum" onClick={getSum} />
    </div>
  );
};
