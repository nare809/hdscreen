import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Questions.scss";


class Questions extends Component {
  render() {
    return (
    <div className="container discord">
      <iframe src="https://discord.com/widget?id=1004779739434713159&theme=dark" width="100%" height="100%" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    </div>
    );
  }
}

export default withRouter(Questions);
