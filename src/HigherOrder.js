import React, { useState } from 'react';

const HigherOrder = () => {
  return (
    <>
      <h1>this is higher</h1>
      <HocRed name={Counter} />
      <HocGreen name={Counter} />
      <HocYellow name={Counter} />
      <HocBlue name={Counter} />
    </>
  );
};

const HocRed = (props) => {
  return (
    <h1 style={{ background: 'red', width: 100 }}>
      <props.name />
    </h1>
  );
};
const HocGreen = (props) => {
  return (
    <h1 style={{ background: 'green', width: 100 }}>
      <props.name />
    </h1>
  );
};

const HocYellow = (props) => {
  return (
    <h1 style={{ background: 'yellow', width: 100 }}>
      <props.name />
    </h1>
  );
};

const HocBlue = (props) => {
  return (
    <h1 style={{ background: 'blue', width: 100 }}>
      <props.name />
    </h1>
  );
};

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className='text-center'>
        <h1>{count}</h1>
        <button type='button' className='rounded-circle' onClick={(e) => setCount(count + 1)}>
          +
        </button>
      </div>
    </>
  );
}

export default HigherOrder;
