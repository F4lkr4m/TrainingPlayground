import { useState } from 'react'
import './App.css'

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

const startErrorAlgo = () => {
  const arr: number[] = [];
  console.log('1');
  console.log(arr[0].kek());
}

window.onerror = (error) => {
  logCodeLine(error.toString());
}

function App() {
  const [counter, setCounter] = useState(0);

  const addLineOnBtnClick = () => {
    logCodeLine(`testing line ${counter}`);
    setCounter((prev) => prev + 1);
  }

  const clearCodeBlockOnClick = () => {
    clearCodeBlock();
  }

  const startAlgo = () => {
    startErrorAlgo();
  }

  return (
    <div className="app">
      <button onClick={addLineOnBtnClick}>Add mock code line</button>
      <button onClick={clearCodeBlockOnClick}>Clear console</button>
      <button onClick={startAlgo}>Start algo</button>

      <code id="code-block" className="code-block">
        <p className="code-block__line">some code line </p>
      </code>
    </div>
  )
}

export default App
