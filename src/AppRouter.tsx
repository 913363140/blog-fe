import { Router } from "@reach/router";
import * as React from "react";
import Home from "./pages/home/home";

const routers: Array<[string, React.FC<any> | typeof React.Component]> = [
  ["/", Home]
];

export default function AppRouter() {
  return (
    <Router basepath={"/"}>
      {routers.map((route, idx) => {
        const [path, Page] = route as any;
        return <Page path={path} key={idx} />;
      })}
    </Router>
  );
}
