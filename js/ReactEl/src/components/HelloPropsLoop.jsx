import React from 'react'

export const HelloPropsLoop = () =>{
  const listData = ["boo","foo","woo"];
  return (
    <HelloPropsLoopList data={listData} />
  );
};
export default HelloPropsLoop;

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
