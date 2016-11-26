import reqwest from 'reqwest';
import alt from '../alt';
import ContactActions from '../actions/ContactActions';

var contactStore = alt.createStore(class ContactStore {
  constructor() {
    this.contacts = [];
    this.bindActions(ContactActions);
  }

  onGetContactsSuccess(resp) {
    this.contacts = resp;
  }

  onGetContactsFail(err) {
    console.log(err);
  }

  onCreateSuccess(resp) {
    this.contacts.push(resp);
  }

  onToggleFavouriteSuccess(resp) {
    let contactId = resp._id;

    this.contacts = this.contacts.map((contact) => {
      if (contact._id == contactId) {
        contact.favourite = !contact.favourite;
      }
      return contact;
    });
  }

  onDestroySuccess(resp) {
    this.contacts = this.contacts.filter((contact) => {
      return contact._id !== resp._id;
    });
  }
});

module.exports = contactStore
