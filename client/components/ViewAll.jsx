const React = require('react');

class ViewAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (<span className="related-tracks-view-all attribute-hover">View all</span>);
  }
}

module.exports = ViewAll;
