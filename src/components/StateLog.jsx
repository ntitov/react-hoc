import React from "react";

function stateLog(Component) {
  class StateLog extends React.Component {
    componentDidMount() {
      console.log("HOS Did Mount");
    }
    render() {
      return <Component {...this.props} />;
    }
  }

  StateLog.displayName = `StateLog(${Component.displayName ||
    Component.name ||
    "Component"})`;

  return StateLog;
}

export default stateLog;
