import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/Form';
import { useSettingsContext } from '../../Context/Settings/SettingsContext';
import { v4 as uuid } from 'uuid';
import { Pagination } from '@mantine/core';
import List from '../List/List';
import PaginationComponent from '../PaginationComponent/pagination';
import './todo.scss';

const ToDo = () => {
  const [defaultValues] = useState({
    difficulty: 4,
  });

  const { settings } = useSettingsContext();
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [formData, setFormData] = useState({});
  const { handleChange, handleSubmit, values } = useForm(addItem, defaultValues);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete} items pending`;
    localStorage.setItem('todoList', JSON.stringify(list));
  }, [list, incomplete]);

  useEffect(() => {
    const storedList = localStorage.getItem('todoList');
    if (storedList) {
      setList(JSON.parse(storedList));
    }
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  function addItem(item) {
    const isDuplicate = list.some(existingItem => existingItem.text === item.text && existingItem.assignee === item.assignee);

    if (!isDuplicate) {
      item.id = uuid();
      item.complete = false;
      const updatedList = [...list, item];
      setList([...list, item]);
      localStorage.setItem('todoList', JSON.stringify(updatedList));

    }
  }

  function toggleComplete(id) {
    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const filteredList = settings.hideTheCompleted
    ? list
    : list.filter((item) => !item.complete);

  const startIndex = (currentPage - 1) * settings.numOfItem;
  const endIndex = startIndex + settings.numOfItem;
  const paginatedList = filteredList.slice(startIndex, endIndex);

  return (
    <>
      <div className="ToDo" onSubmit={handleSubmit}>
        <h1>To Do List: {incomplete} items pending</h1>

        <form className='for'>
          <h1>Add To Do Item</h1>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
          <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
          <button type="submit">Add Item</button>

        </form>

        {/* <form onSubmit={handleSubmit}>
          <h2>Add To Do Item</h2>

          <label>
            <span>To Do Item</span>
            <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
          </label>

          <label>
            <span>Assigned To</span>
            <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
          </label>

          <label>
            <span>Difficulty</span>
            <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
          </label>

          <label>
            <button type="submit">Add Item</button>
          </label>
        </form> */}








        <List items={paginatedList} toggleComplete={toggleComplete} />

        {list.length > settings.numOfItem && (
          <PaginationComponent
            currentPage={currentPage}
            totalItems={filteredList.length}
            itemsPerPage={settings.numOfItem}
            onPageChange={handlePageChange}
          />
        )}

      </div>


      <div className='dett'>


        <form >


          <h2>Updated Settings</h2>
          <p>Items per page: {settings.numOfItem}</p>
          <p>Show completed items: {settings.hideTheCompleted ? 'yes' : 'no'}</p>

        </form>
      </div>


      {/* <div>
        <p>Items per page: {settings.numOfItem}</p>
        <p>Show completed items: {settings.hideTheCompleted ? 'yes' : 'no'}</p>
      </div> */}
    </>
  );
};

export default ToDo;