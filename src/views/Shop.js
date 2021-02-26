/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Layout from "../layout";

const mystyle = {
  border: "0px",
  width: "100%!important",
  padding: "0px",
  margin: "0 auto",
  minHeight: "200px",
  maxWidth: "1000px",
  display: "block"
};



// const style={{border: "0", width: '100%!important', padding: '0', margin: '0 auto', minHeight: '200px', maxWidth: '1000px', display: 'block'}} 
// const script = <div></div>

export default function Shop() {
  return (
    <Layout>
      {/* {script} */}
      {/* <script type="text/javascript" src="https://widget-sandbox.droplabs.pl/bubble.js" id="dl-bubble" data-facility-id="122034" data-bottom="100px" data-right="100px" data-background-color="#b11f20" data-text-color-type="LIGHT" data-href="https://kwojnar137.github.io/" data-text-type="TICKET"  data-shape="bubble"></script> */}
      {/* <iframe id="dl-widget" src="https://widget-sandbox.droplabs.pl/index.html?facilityId=122034&onlineGroupId=315569"></iframe> */}
      <iframe id="dl-widget" style={mystyle} src="https://widget-sandbox.droplabs.pl/index.html?facilityId=1&onlineGroupId=3421"></iframe>
      <script type="text/javascript" src="https://widget-sandbox.droplabs.pl/widget.js"></script>
    </Layout>
  );
}
