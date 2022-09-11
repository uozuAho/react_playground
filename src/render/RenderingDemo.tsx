import React from "react";

export function RenderingDemo() {
  return (
    <>
      <h1>Rendering</h1>

      <p>Use chrome + react dev tools. Go to dev tools - components - settings
        - highlight updates when components render. If you also want to see DOM
        paints, click the chrome dev tools ellipses - more tools - rendering -
        paint flashing.
      </p>

      <h2>To do</h2>
      <ul>
        <li>MemoCounterExample: counter B still shows a component render, but doesn't log it. Why?</li>
      </ul>

      <FirstBadExample />
      <MemoCounterExample />
      <ClassCounterExample />
    </>
  );
}

function FirstBadExample() {
  const [counterA, setCounterA] = React.useState(0);
  const [counterB, setCounterB] = React.useState(0);

  return (
    <>
      <h2>Example one - unnecessary rendering!</h2>
      <p>When you increment the counter, all components under this example
        are updated, and the whole page paints!.
      </p>

      <button
        onClick={() => {
          console.log("Click button");
          setCounterA(counterA + 1);
        }}
      >Increment counter A</button>

      <Counter name="A" counter={counterA}/>
      <Counter name="B" counter={counterB}/>
    </>
  );
}

function MemoCounterExample() {
  const [counterA, setCounterA] = React.useState(0);
  const [counterB, setCounterB] = React.useState(0);

  return (
    <>
      <h2>Example two - React.memo</h2>

      <p>This example uses React.memo around the counter component to ensure it
        is only rendered when the value changes.
      </p>

      <button
        onClick={() => {
          console.log("Click button");
          setCounterA(counterA + 1);
        }}
      >Increment counter A</button>

      <MemoCounter name="A" counter={counterA}/>
      <MemoCounter name="B" counter={counterB}/>
    </>
  );
}

interface ClassCounterExampleState {
  counterA: number,
  counterB: number
}

class ClassCounterExample extends React.Component<{}, ClassCounterExampleState> {
  constructor(props: any) {
    super(props);
    this.state = {
      counterA: 0,
      counterB: 0
    };
  }

  private onClickA = () => {
    this.setState(state => ({
        counterA: state.counterA + 1
      })
    );
  }

  render(): React.ReactNode {
    return (
      <>
        <h2>ClassCounterExample</h2>
  
        <p>todo: explain me
        </p>
  
        <button onClick={this.onClickA}>Increment counter A</button>
        <p>A: {this.state.counterA}</p>
        <p>B: {this.state.counterB}</p>
      </>
    );
  }
}

function Counter({name, counter}: {name: string, counter: number}) {
  console.log(`Rendering counter ${name}`);
  return (
    <>
      <p>{name}: {counter}</p>
    </>
  )
}

const MemoCounter = React.memo(function Counter({ name, counter }: {name: string, counter: number}) {
  console.log(`Rendering counter ${name}`);
  return (
    <div>
      {name}: {counter}
    </div>
  );
});
