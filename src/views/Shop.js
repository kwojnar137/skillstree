/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Layout from "../layout";

const mystyle = {
  border: "0",
  width: "100%!important",
  padding: "0",
  margin: "0 auto",
  minHeight: "200px",
  maxWidth: "1000px",
  display: "block"
};

// const style={{border: "0", width: '100%!important', padding: '0', margin: '0 auto', minHeight: '200px', maxWidth: '1000px', display: 'block'}} 
const script = <div><iframe id="dl-widget" style={mystyle} src='https://widget-sandbox.droplabs.pl/index.html?facilityId=1&onlineGroupId=3421'></iframe><script type="text/javascript" src="https://widget-sandbox.droplabs.pl/widget.js"></script></div>

export default function Shop() {
  return (
    <Layout>
      {script}
    </Layout>
  );
}
