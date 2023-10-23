import { ReactNode, FC } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return <div className="container">{children}</div>;
}
