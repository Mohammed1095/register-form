import { Fragment } from "react";
import MainHeader from "./MainHeader";
import Submit from "../Form/submit";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      <Submit />
    </Fragment>
  );
};

export default Layout;
