import React, {useState} from 'react';
import './App.css';
import Form from './Form.js';
import Table from './Table.js';
import ImportData from './components/ImportData';

function App() {
  const [tableData, setTableData] = useState([]);
  const onSubmit = (data) => {
    // Оновлюємо стан даними з форми
    // setTableData((prevData) => [...prevData, data]);
    // setTableData([data]);
    setTableData((prevData) => [...[], data]);
  };
  console.log(tableData)
  


  return (
    <div className='main'>
      <Form onSubmit={onSubmit} />
      <ImportData file='.csv' /> 
      <Table  tableData={tableData}/>
      
    </div>
  );
}

export default App;
