import React from 'react';
import Contact from './Contact';

class ContactList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredContacts: [],
      filtering: false,
      keyword: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.filtering) {

      this.setState({ filteredContacts: this.filterContacts(nextProps.contacts)});
    }
  }

  filterContacts(contacts) {
    return contacts.filter((contact) => {

      return contact.contactname.toLowerCase().search(this.state.keyword.toLowerCase()) !== -1;
    });
  }

  filterList(event) {
    let keyword = event.target.value;

    if (!keyword) {
      this.setState({ filtering: false });
      return;
    }

    this.setState({
      filteredContacts: this.filterContacts(this.props.contacts),
      filtering: true,
      keyword: keyword
    });
  }

  render() {
    let contactList = [];
    let contacts = this.state.filtering ? this.state.filteredContacts : this.props.contacts;
    //console.log(contacts);
    if (contacts.length) {
      contacts.map((contact) => {
        contactList.push(<Contact key={contact._id} contact={contact} />);

      });
    //console.log(contactList);
    }

    if (this.props.contacts.length == 0) {
      return (
        <div className="column">
          <h4>{this.props.contactname}</h4>
          No contacts on this list.
        </div>
      );
    }

    return (
      <div className="column">
        <h4>
          {this.props.contactname} &nbsp;
          <div className="ui label basic circular">
            {this.state.filtering ?
              'Showing ' + this.state.filteredContacts.length
                + ' out of ' + this.props.contacts.length : this.props.contacts.length}
          </div>
        </h4>
        
        <div className="ui top attached menu">
          <div className="right menu">
            <div className="ui right aligned search item">
              <div className="ui transparent icon input">
                <input
                  className="prompt"
                  placeholder="Search contacts..."
                  onChange={this.filterList.bind(this)}
                />
                <i className="search link icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="ui bottom attached segment">
          <div className="ui divided items">
            {contactList.length ? contactList : 'Nothing found.'}
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  contacts: React.PropTypes.array,
  contactname: React.PropTypes.string
};

module.exports = ContactList;
