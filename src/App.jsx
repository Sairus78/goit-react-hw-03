import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import data from './components/data/data.json';
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState(() => {
    const savedData = localStorage.getItem('items');
    return savedData ? JSON.parse(savedData) : data;
  });

  const [filter, setFilter] = useState('');

  const filterData = value.filter(dataItem =>
    dataItem.name
      .toLowerCase()
      .trim()
      .includes(filter.toLocaleLowerCase().trim())
  );

  const addData = newData => {
    setValue(prevValue => {
      return [...prevValue, newData];
    });
  };

  const handlerDelete = itemId => {
    setValue(prevValue => {
      return prevValue.filter(item => item.id !== itemId);
    });
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(value));
  }, [value]);

  return (
    <div className='container phonebook-inner'>
      <h1>Phonebook</h1>
      <ContactForm addData={addData} />
      <SearchBox valueFilter={filter} setFilter={setFilter} />
      <ContactList dataInfo={filterData} onDelete={handlerDelete} />
    </div>
  );
}

export default App;
