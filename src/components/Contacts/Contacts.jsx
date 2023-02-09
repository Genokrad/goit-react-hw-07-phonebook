import PropTypes from 'prop-types';
import { StyledButton } from './Contacts.styled';
import { filterContacts } from 'store/cantacts/contactsSelector';
import { useSelector } from 'react-redux';

// export const Contacts = ({ name, number, id, deleteContact,  }) => {
export const Contacts = ({ deleteContact }) => {
  const filter = useSelector(filterContacts);
  return (
    <ul>
      {filter.map(contact => {
        const { id, name, number } = contact;
        return (
          <li key={id}>
            <p>
              <span>{name}</span>: <span>{number}</span>
            </p>
            <StyledButton onClick={() => deleteContact(id)}>
              Delete
            </StyledButton>
          </li>
        );
      })}
    </ul>
  );
};

Contacts.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  deleteContact: PropTypes.func.isRequired,
};
