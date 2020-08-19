// Test.jsx
import React from 'react';

interface TestProps {
  title: string,
};

const Test = ({title} : TestProps) => (<div>{title}{title}</div>);
export default Test;
