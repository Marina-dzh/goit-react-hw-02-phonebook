

import { nanoid } from "nanoid";
import React, { Component } from "react";
import { ContactForm } from "./Form";
import { ContactList } from "./List";
import { Container } from "./App.styled";
export class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}],
    filter: '',
   
  }
  
  addContact = ({ name, number }) => {
    for (const item of this.state.contacts) {
      if (item.name === name & item.number===number) {
        alert(`Oooops, it seems like ${name} is already in contacts. `)
        return
    }
    }
      
    this.setState(pState => ({
      
      contacts: [...pState.contacts, { name, id:nanoid(), number  }]
    }));

  }

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
    
  }
  deleteContact = (id) => {

    this.setState(pState => ({
  contacts: pState.contacts.filter(contact=>contact.id !==(id))
}))
  
}
  
  render() {
    const normFilter = this.state.filter.toLowerCase();
    const visibleContact = this.state.contacts.filter(contact=>contact.name.toLowerCase().includes(normFilter))
    return (
      <Container>
        <h1>PhoneBook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
      <ContactList contacts={visibleContact} filter={this.state.filter} changeFilter={ this.changeFilter} deleteContact={this.deleteContact} />
        </Container >
    )
  }

}