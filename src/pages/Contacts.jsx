import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { FilterContacts } from 'components/FilterContacts/FilterContacts';
import { ContactList } from 'components/ContactList/ContactList';

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
        <Section title="Search contacts">
          <FilterContacts />
        </Section>
      </Section>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
