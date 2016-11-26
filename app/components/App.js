import React from 'react';
import AddContactField from './AddContactField.js';
import ContactList from './ContactList.js';
import ContactStore from '../stores/ContactStore';
import ContactActions from '../actions/ContactActions';
import connectToStores from 'alt/utils/connectToStores';

class App extends React.Component {

  static getStores() {
    return [ContactStore];
  }

  static getPropsFromStores() {
    return ContactStore.getState();
  }

  componentDidMount() {
    ContactActions.getContacts();
  }

  render() {

    let contacts = this.props.contacts.filter((contact) => {
      return !contact.favourite;
    });

    let favouriteContacts = this.props.contacts.filter((contact) => {
      return contact.favourite;
    });

    return (
      <div className="ui grid container">
      <h1>Phonebook Demo</h1>
        <div className="row">
          <div className="ui single column stackable">
            <AddContactField id="new-contact" placeholder="Contact..." />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="ui two column grid stackable">
              <ContactList contactname="Contact List" contacts={contacts} />
              <ContactList contactname="Favourite Contacts" contacts={favouriteContacts} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = connectToStores(App);
