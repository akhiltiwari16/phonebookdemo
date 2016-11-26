import alt from '../alt';
import reqwest from 'reqwest';

class ContactActions {
  constructor() {

    this.generateActions(
      'getContactsSuccess',
      'getContactsFail',
      'toggleFavouriteSuccess',
      'toggleFavouriteFail',
      'createSuccess',
      'createFail',
      'destroySuccess',
      'destroyFail'
    );
  }

  getContacts() {
    let actions = this.actions;

    reqwest({
      url: '/contact',
      type: 'json',
      method: 'get',
      error: (err) => {
        actions.getContactsFail(err);
      },
      success: (resp) => {
        actions.getContactsSuccess(resp);
      }
    });
  }

  toggleFavourite(id, state) {
    let actions = this.actions;

    reqwest({
      url: '/contact/' + id + '/favourite',
      type: 'json',
      method: 'post',
      data: { favourite: state },
      error: (err) => {
        actions.toggleFavouriteFail(err);
      },
      success: (resp) => {
        actions.toggleFavouriteSuccess(resp);
      }
    });
  }

  create(contactname,contactnum) {
    let actions = this.actions;

    reqwest({
      url: '/contact',
      type: 'json',
      method: 'post',
      data: { contactname: contactname, contactnum: contactnum },
      error: (err) => {
        actions.createFail(err);
      },
      success: (resp) => {
        actions.createSuccess(resp);
      }
    });
  }

  destroy(id) {
    let actions = this.actions;

    reqwest({
      url: '/contact/' + id,
      type: 'json',
      method: 'delete',
      error: (err) => {
        actions.destroyFail(err);
      },
      success: (resp) => {
        actions.destroySuccess(resp);
      }
    });
  }
}

module.exports = alt.createActions(ContactActions);
