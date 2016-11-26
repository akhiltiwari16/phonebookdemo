import React from 'react';
import ContactActions from '../actions/ContactActions';

var ENTER_KEY_CODE = 13;

class AddContactField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value1: this.props.value1 || '',
      value2: this.props.value2 || ''
    }
  }

  handleChange (name, e) {
      var change = {};
      change[name] = e.target.value;
      this.setState(change);
    }

  onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.saveContact();
    }
  }

  saveContact() {
    console.log(this.state);
    if (!this.state.value1) return;
    if (!this.state.value2) return;
    ContactActions.create(this.state.value1,this.state.value2);
    this.setState({ value1: '',value2: '' });
  }

  render() {
    return (
      <div className="ui right action input" >
        <input
          placeholder="Contact Name"
          value={this.state.value1}
          onChange={this.handleChange.bind(this,'value1')}
          onKeyDown={this.onKeyDown.bind(this,'value1')}
          autoFocus={true}
        />
        <input
          placeholder="Contact Number"
          value={this.state.value2}
          onChange={this.handleChange.bind(this,'value2')}
          onKeyDown={this.onKeyDown.bind(this,'value2')}
        />
        <a className="ui teal button" onClick={this.saveContact.bind(this)}>
          <i className="add icon"></i>
          Add
        </a>
      </div>
    );
  }
}

AddContactField.propTypes = {
  placeholder: React.PropTypes.string
};

module.exports = AddContactField;
