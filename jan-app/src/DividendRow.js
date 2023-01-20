// DividendRow.js

import React, { Component } from 'react';

class DividendRow extends Component {
  render() {
    return (
      <br>
        <tr>
          <td>{this.props.name}</td>
          <td>{this.props.dividendYield}</td>
        </tr>
      </br>
    );
  }
}

export default DividendRow;