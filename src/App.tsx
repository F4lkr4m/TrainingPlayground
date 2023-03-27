import { useEffect, useState } from 'react'
import { curry } from './tasks/21_carry';
import './App.css'

const sum = (a: number, b: number, c: number) => {
  return a + b + c;
}

const curriedSum = curry(sum);

const functionToRun = () => curriedSum(1)(2,3);

export const logCodeLine = (message: string) => {
  const codeBlock = document.getElementById('code-block');

  const codeLine = document.createElement('p');
  codeLine.classList.add('code-block__line');
  codeLine.innerText = message;
  codeBlock?.append(codeLine);
}

export const clearCodeBlock = () => {
  const codeBlock = document.getElementById('code-block');
  while (codeBlock?.firstChild) {
    codeBlock.removeChild(codeBlock.firstChild);
  }
}

window.onerror = (error) => {
  logCodeLine(error.toString());
}

const ConsoleControls = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    logCodeLine(functionToRun());
  }, [])

  const addLineOnBtnClick = () => {
    logCodeLine(`testing line ${counter}`);
    setCounter((prev) => prev + 1);
  }

  const clearCodeBlockOnClick = () => {
    clearCodeBlock();
  }

  const startAlgo = () => {
    logCodeLine(functionToRun());
  }
  return (
  <>
    <div className="console-controls">
      <button onClick={addLineOnBtnClick}>Add mock code line</button>
      <button onClick={clearCodeBlockOnClick}>Clear console</button>
      <button onClick={startAlgo}>Start algo</button>
    </div>
  </>);
}

function App() {


  return (
    <div className="app">
      <h3>Training Playground</h3>
      <ConsoleControls />
      <code id="code-block" className="code-block">
        <p className="code-block__line">some code line </p>
      </code>
    </div>
  )
}

export default App
