import React, { FC, ReactElement } from "react";

type Props = {
  render: (fullname: string) => ReactElement;
};

const Input: FC<Props> = () => {
  const [fullName, setFullName] = React.useState("");
  console.log(fullName);
  return (
    <>
      <input type="text" onChange={e => setFullName(e.target.value)} />
      <div>{fullName}</div>
    </>
  );
};

const InputContainer: FC = () => {
  return <Input render={data => <h3>{data}</h3>} />;
};

export default InputContainer;
