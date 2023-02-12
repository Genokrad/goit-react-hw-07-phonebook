import { Notify } from 'notiflix';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Search } from './Search/Search';
import { Contacts } from './Contacts/Contacts';
import { StyledDiv } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'store/filter/filterSlice';
import { getFilter } from 'store/filter/filterSelector';
import { getUser } from 'store/cantacts/contactsSelector';
import { fetchContacts, addContacts, deleteContact } from 'store/operations';
import { useEffect } from 'react';
import { Loader } from './Loader/Loader';

export function App() {
  const contacts = useSelector(getUser);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);

  const sendData = data => {
    const { name, number } = data;

    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number.toLowerCase() === number.toLowerCase()
      )
    ) {
      Notify.failure(`${name} or number ${number} is already in contacts`);
      return;
    }

    const newCustomer = {
      name: name,
      number: number,
    };

    dispatch(addContacts(newCustomer));
  };

  const filterValueHandler = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  // const filterContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledDiv>
      <Section title="Phonebook">
        <Form sendData={sendData} />
      </Section>
      <Section title="Contacts">
        {isLoading && <Loader />}
        <Search filter={filter} onChange={filterValueHandler} />
        <Contacts
          // filterContacts={filterContacts()}
          deleteContact={deleteContacts}
        />
      </Section>
    </StyledDiv>
  );
}
