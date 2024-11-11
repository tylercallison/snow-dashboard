import { PropsWithChildren } from "react";

const Container = (props: PropsWithChildren) => {
  return <div className="container mx-auto p-4 md:p-0">{props.children}</div>;
};

export default Container;
