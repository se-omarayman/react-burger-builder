import React from "react";
import classes from "./Layout.module.css";
type Props = {
   children?: React.ReactNode;
};

const layout = ({ children }: Props) => (
   <React.Fragment>
      <div>toolbar, sidebar, backdrop</div>
      <main className={classes.Content}>{children}</main>
   </React.Fragment>
);

export default layout;
