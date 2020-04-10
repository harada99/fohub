import React from 'react'

const HelloPropsLoopList = (props) =>{
  const listItems = props.data.map((text, index) => {
      // Fragment構文
      return (
      <>
        <dt>{index}</dt>
        <dd>{text}</dd>
      </>
    );
  });

  return (
    <div>
      <dl>
      {listItems}
      </dl>
    </div>
  );
};

export default HelloPropsLoopList;