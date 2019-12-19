import React, { FC } from "react";

type Props = {
  children: (age: number) => JSX.Element;
};

const Input: FC<Props> = ({ children }) => {
  const [age, setAge] = React.useState(20);
  console.log(age);
  return (
    <>
      <input
        type="number"
        min={0}
        max={150}
        onChange={e => setAge(e.target.value)}
      />
      {children(age)}
    </>
  );
};

const InputContainerTwo: FC = () => {
  return <Input>{age => <h2>{age}</h2>}</Input>;
};

export default InputContainerTwo;
