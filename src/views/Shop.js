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
const script = <div><iframe id="dl-widget" style={mystyle} src='https://widget.droplabs.pl/index.html?facilityId=235&onlineGroupId=5041'></iframe><script type="text/javascript" src="https://widget.droplabs.pl/widget.js"></script></div>

export default function Shop() {
  return (
    <Layout>
      {/* {script} */}
      <script type="text/javascript" src="https://widget-sandbox.droplabs.pl/bubble.js" id="dl-bubble" data-facility-id="122034" data-bottom="100px" data-right="100px" data-background-color="#b11f20" data-text-color-type="LIGHT" data-href="https://kwojnar137.github.io/" data-text-type="TICKET"  data-shape="bubble"></script>
    </Layout>
  );
}
