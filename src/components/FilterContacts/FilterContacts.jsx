import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { filterContacts } from 'redux/contacts/slice';
import { Title, Input } from './FilterContacts.styled';

export const FilterContacts = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFiltered = e => {
    dispatch(filterContacts(e.target.value));
  };
  return (
    <Title>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFiltered}
      />
    </Title>
  );
};
