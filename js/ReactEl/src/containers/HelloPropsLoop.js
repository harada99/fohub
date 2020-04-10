import React from 'react'
import HelloPropsLoopList from '../components/HelloPropsLoopList'

const HelloPropsLoop = () =>{
  const listData = ["boo","foo","woo"];
  return (
    <HelloPropsLoopList data={listData} />
  );
};

export default HelloPropsLoop;