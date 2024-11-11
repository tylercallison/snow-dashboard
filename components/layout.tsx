import { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren<{
  className?: string;
}>;

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return <div className="flex flex-col">{children}</div>;
};
export { Layout };
