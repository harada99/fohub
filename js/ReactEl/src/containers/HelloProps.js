import React from 'react'

const HelloProps = (props) =>{
  return <div>Hello, my name is {props.name}.</div>
  // const { name,age,love } = props.data;
  // return (
  //   <dl>
  //     <dt>Name</dt><dd>{name}</dd>
  //     <dt>Age</dt><dd>{age}</dd>
  //     <dt>Love</dt><dd>{love}</dd>
  //   </dl>
  // );
};

export default HelloProps;