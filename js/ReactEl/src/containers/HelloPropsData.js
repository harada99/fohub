import React from 'react'
import HelloPropsDataList from '../components/HelloPropsDataList'

const taro = {
  name: "Taro",
  age: 20,
  love: "Game",
}
const hanako = {
  name: "Hanako",
  age: 10,
  love: "Cats",
}

const HelloPropsData = () =>{
  return (
    <div>Props
      <HelloPropsDataList data={taro} />
      <HelloPropsDataList data={hanako} />
    </div>
  );
};

export default HelloPropsData;