/**
 * This page is easier to read in a browser. Run `npm start` and go to
 * http://localhost:3000/render
 */

import React from "react";

export class RenderingDemo extends React.PureComponent {
  render(): React.ReactNode {
    console.log('render RenderingDemo');

    return (
      <>
        <h1>Rendering</h1>

        <p>Use chrome + react dev tools. Go to dev tools - components - settings
          - highlight updates when components render<sup>1</sup>. If you also want to see DOM
          paints, click the chrome dev tools ellipses - more tools - rendering -
          paint flashing.
        </p>

        <h2>To do</h2>
        <ul>
          <li>object as prop example and mitigation</li>
          <li>Why do all button clicks cause a full page paint?</li>
        </ul>

        <h2>Quirks</h2>
        <ol>
          <li><a href="https://github.com/facebook/react/issues/19778">React dev tools bug/quirk</a>:
          'Hightlight updates' appears to highlight whenever render _would_ be
          called, but it may not be. This can be confirmed with the profiler /
          render counter.</li>
        </ol>

        <hr></hr>

        <FirstBadExample />
        <MemoCounterExample />

        <hr></hr>
        <h1>References</h1>
        <ul>
          <li>
            <a href="https://felixgerschau.com/react-rerender-components/">
              https://felixgerschau.com/react-rerender-components/</a>
          </li>
        </ul>
      </>
    );
  }
}

function FirstBadExample() {
  const [counterA, setCounterA] = React.useState(0);
  const [counterB, setCounterB] = React.useState(0);

  console.log("render FirstBadExample");

  return (
    <>
      <h2>Unnecessary rendering of child components</h2>
      <p>When you increment the counter, all components under this example
        are rendered. This is because changes to a component's state cause all
        child components to update, regardless of whether their state or props
        changed. Note that React's default component behaviour is to render on
        any props or state change (<a href="https://reactjs.org/docs/react-component.html#shouldcomponentupdate">React docs</a>).
      </p>

      <button
        onClick={() => {
          console.log("Click button");
          setCounterA(counterA + 1);
        }}
      >Increment counter A</button>

      <Counter name="A" counter={counterA}/>
      <Counter name="B" counter={counterB}/>
      <RenderCounter />
    </>
  );
}

function MemoCounterExample() {
  const [counterA, setCounterA] = React.useState(0);
  const [counterB, setCounterB] = React.useState(0);

  console.log("render MemoCounterExample");

  return (
    <>
      <h2>MemoCounterExample</h2>

      <p>This example uses React.memo around the counter component to ensure it
        is only rendered when its prop value changes.
      </p>

      <button
        onClick={() => {
          console.log("Click button");
          setCounterA(counterA + 1);
        }}
      >Increment counter A</button>

      <MemoCounter name="A" counter={counterA}/>
      <MemoCounter name="B" counter={counterB}/>
      <RenderCounter />
    </>
  );
}

function RenderCounter() {
  const counter = React.useRef(0);

  return (
    <b>Renders: {++counter.current}</b>
  );
}

function Counter({name, counter}: {name: string, counter: number}) {
  console.log(`Rendering counter ${name}`);
  return (
    <>
      <p>{name}: {counter} <RenderCounter /></p>
    </>
  );
}

const MemoCounter = React.memo(function Counter({ name, counter }: {name: string, counter: number}) {
  console.log(`Rendering counter ${name}`);
  return (
    <>
      <p>{name}: {counter} <RenderCounter /></p>
    </>
  );
});
