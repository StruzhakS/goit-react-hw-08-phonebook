import axios from 'axios';

axios.defaults.baseURL =
  'https://64870eb0beba6297278fcbfc.mockapi.io/Phonebook/';

export const getContactsApi = async () => {
  const contacts = await axios.get('/contacts').then(({ data }) => data);
  return contacts;
};

export const addContactApi = user => {
  const contact = axios.post('/contacts', user);
  return contact;
};

export const deleteContactApi = async id => {
  const contact = await axios.delete(`/contacts/${id}`);

  return contact.data;
};
