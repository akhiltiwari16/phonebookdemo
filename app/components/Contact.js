import React from 'react';
import ContactActions from '../actions/ContactActions';

class Contact extends React.Component {
  toggleFavourite() {
    ContactActions.toggleFavourite(this.props.contact._id, !this.props.contact.favourite);
  }

  destroy() {
    ContactActions.destroy(this.props.contact._id);
  }

  render() {
    return (
      <div className="item">
        <div className="middle aligned content">
            <span>{this.props.contact.contactname}</span>
            <span className="tiny ui right floated text">{this.props.contact.contactnum}</span>

        </div>
        <div className="middle aligned content">
          <button className="tiny ui right floated red button" onClick={this.destroy.bind(this)}>
            Delete
          </button>
          <button className="tiny ui right floated teal button" onClick={this.toggleFavourite.bind(this)}>
            {this.props.contact.favourite ? 'Remove from favourites' : 'Add to favourites'}
          </button>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: React.PropTypes.object.isRequired
};

module.exports = Contact;
