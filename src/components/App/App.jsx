import DoForm from '../DoForm/DoForm';
import ContactList from '../ContactList/ContactList';
import Filter from 'components/FilterCOntacts/Filtercontacts';
import s from './style.module.css';
import { useSelector } from 'react-redux';

function App() {
  const { contacts } = useSelector(state => state.contacts);
  return (
    <>
      <h1 className={s.title}>Phone Book</h1>
      <DoForm />

      {contacts.length > 1 && <Filter />}
      <ContactList />
    </>
  );
}

export default App;
