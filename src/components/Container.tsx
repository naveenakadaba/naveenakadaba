import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  width: string;
};

const Container = (props: ContainerProps) => {
  const { children, width } = props;

  return (
    <div className="mx-auto max-w-full" style={{ width }}>
      {children}
    </div>
  );
};

export default Container;
