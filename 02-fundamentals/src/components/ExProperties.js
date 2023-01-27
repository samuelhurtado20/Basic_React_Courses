import { Component } from "react";
import PropTypes from 'prop-types';

  export default class ExProperties extends Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>{this.props.name}</h1>
          <ul>
            <li>Array:  {this.props.exArray.join('-')}</li>
            <li>Number: {this.props.exNumber}</li>
            <li>Object: {this.props.exObject}</li>
            <li>ex Function: {this.props.exArray.map(this.props.exFunction)}</li>
            <li>exElementoReact: {this.props.exElementoReact}</li>
            <li>Number: {this.props.exComponente}</li>
          </ul>
        </div>
      );
    }
  }

  ExProperties.propTypes = {
    exNumber: PropTypes.number.isRequired
  };