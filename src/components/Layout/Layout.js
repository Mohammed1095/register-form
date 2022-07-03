import { Fragment } from "react";
import Register from "../Form/form";
import MainHeader from "./MainHeader";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      <Register />
    </Fragment>
  );
};

export default Layout;
