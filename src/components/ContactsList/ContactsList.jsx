import {
  ListOfContact,
  Container,
  ContactItem,
  Button,
} from './ContactsList.styled';
import { PropTypes } from 'prop-types';

const ContactsList = ({ contacts, deleteContact }) => {

  return (
    <Container>
      <h2>My contacts</h2>
      {contacts.map(contact => (
        <ListOfContact key={contact.id}>
          <ContactItem>
            {contact.name}: {contact.number}{' '}
            <Button
              onClick={() => {
                deleteContact(contact.id);
              }}
            >
              Delete
            </Button>
          </ContactItem>
        </ListOfContact>
      ))}
    </Container>
  );
};

ContactsList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func,
};

export default ContactsList;
