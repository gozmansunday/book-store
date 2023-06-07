import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-3">
      {children}
    </div>
  );
};

export default Container;