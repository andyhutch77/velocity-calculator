import React from 'react';
class Input extends React.Component {
  render() {
          return <p style={{ }}>
            <code>
              <input type="number" value={this.props.value} onChange={this.props.handleChange} />
            </code>
          </p>
  }
}
export default Input;