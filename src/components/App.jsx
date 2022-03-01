import React from 'react';
// import { nanoid } from 'nanoid';
import Contacts from './Contacts/Contacts';
// import Filter from './Filter/Filter';

export default class App extends React.Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addName = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  submitBtn = e => {
    e.preventDefault();

    const myContacts = this.state.contacts;
    const { name, number } = this.state;

    myContacts.push(`${name}: ${number}`);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  onSaveFind = e => {
    this.setState({ filter: e.currentTarget.value.trim() });
  };

  findByName = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(
      elem =>
        elem.name.slice(0, filter.length).toLowerCase() === filter.toLowerCase()
    );
  };
  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.submitBtn}>
          <label>
            Name
            <input
              onChange={this.addName}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>{' '}
          <label>
            Number
            <input
              onChange={this.addName}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add name</button>
        </form>

        <div>
          <h2>Contacts</h2>
          {/* <Filter
            saveFind={this.onSaveFind}
            filter={filter}
            contacts={contacts}
          /> */}
          <Contacts contacts={contacts} />
        </div>
      </div>
    );
  }
}
