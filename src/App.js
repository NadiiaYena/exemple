import React from 'react';
import './App.css';
import Form from './Form.js';
import Table from './Table.js';
import ImportData from './components/ImportData';

function App() {
  const onSubmit = (data) => {
    // Оновлюємо стан даними з форми
    console.log(data);
  }  

  
  return (
    <div className='main'>
      <Form onSubmit={onSubmit} />
      <ImportData />
      <Table />
    </div>
  );
}

export default App;
