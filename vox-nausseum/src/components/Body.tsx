import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Body = ({ children }: Props) => {
  return children;
};

export default Body;
