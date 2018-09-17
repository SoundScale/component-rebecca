const React = require('react');
const Popup = require('reactjs-popup').default;
const OptionsWindow = require('./OptionsWindow.jsx');

class OptionsButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  optionsClick() {
    this.setState(prevState => ({ clicked: !prevState.clicked }));
  }

  render() {
    const { clicked } = this.state;
    const click = this.optionsClick.bind(this);
    let button;
    if (clicked) {
      button = <button type="button" className="sc-hover-button options-button-clicked" onClick={this.optionsClick.bind(this)} />;
    } else {
      button = <button type="button" className="sc-hover-button options-button border-hover" />;
    }
    return (
      <Popup
        trigger={() => (
          button
        )}
        closeOnDocumentClick
        arrow={false}
        onOpen={click}
        onClose={click}
        contentStyle={{ width: "200px", padding: "0px", border: "none" }}
      >
        <OptionsWindow />
      </Popup>
    );
  }
}

//   render() {
//     const { clicked } = this.state;
//     const click = this.optionsClick.bind(this);
//     if (clicked) {
//       return <button type="button" className="sc-hover-button options-button-clicked" onClick={this.optionsClick.bind(this)} />;
//     }
//     return (
//       <Popup
//         trigger={() => (
//           <button type="button" className="sc-hover-button options-button border-hover" />
//         )}
//         closeOnDocumentClick
//         onOpen={click}
//       >
//         <OptionsWindow />
//       </Popup>
//     );
//   }
// }

// return <button type="button" className="sc-hover-button options-button border-hover" onClick={this.optionsClick.bind(this)} />;

module.exports = OptionsButton;
