import React, { useEffect } from 'react';
import "./Table.css"
import filtr from './img/filtr.png';

function Table({tableData}) {
//   // Зчитувати збережені дані з локального сховища
// const savedData = JSON.parse(localStorage.getItem('savedTableData'));
  
// // Додавати збережені дані до таблиці, якщо вони є
// if (savedData) {
//   const tableBody = document.querySelector('#myTable tbody');
//   savedData.forEach(data => {
//     const newRow = document.createElement('tr');
//     const nameCell = document.createElement('td');
//     nameCell.className = "name";
//     const dateCell = document.createElement('td');
//     dateCell.className = "datOfBirth"
//     const ageCell = document.createElement('td');
//     ageCell.className = "age";
//     const addressCell = document.createElement('td');
//     addressCell.className = "address";
//     const checkboxCell = document.createElement('td'); // Додати нову ячейку для чекбоксу
//     checkboxCell.className = "input"
//       const checkbox = document.createElement('input'); // Створити новий елемент чекбоксу
//       checkbox.type = 'checkbox';
//       checkbox.className = 'checkbox';
//     checkbox.checked = data.isChecked; // Встановити стан чекбоксу збережених даних
//     checkboxCell.appendChild(checkbox); // Додати чекбокс в ячейку
//     nameCell.textContent = data.name;
//     dateCell.textContent = data.date;
//     ageCell.textContent = data.age;
//     addressCell.textContent = data.address;
//     newRow.appendChild(checkboxCell); // Додати ячейку з чекбоксом до рядка
//     newRow.appendChild(nameCell);
//     newRow.appendChild(dateCell);
//     newRow.appendChild(ageCell);
//     newRow.appendChild(addressCell);
//     tableBody.appendChild(newRow);
//   });
// }

  const addRowsToTable = () => {
    const tableBody = document.getElementById('tableBody');

    tableData.forEach((data) => {
      const newRow = document.createElement('tr');
      const checkboxCell = document.createElement('td');
      checkboxCell.className = 'input'
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'checkbox'
      checkboxCell.appendChild(checkbox);
      newRow.appendChild(checkboxCell);

      const nameCell = document.createElement('td');
      nameCell.textContent = data.data.name;
      newRow.appendChild(nameCell);

      const dateCell = document.createElement('td');
      dateCell.textContent = data.data.date;
      newRow.appendChild(dateCell);

      const dob = new Date(data.data.date); // отримати дату народження з поля введення
      // console.log(dob)
      const now = new Date(); // отримати поточну дату
      // console.log(now)
      const diffInMs = now - dob; // відняти дату народження від поточної дати, щоб отримати різницю в мілісекундах
      // console.log(diffInMs)  
      const msInYear = 1000 * 60 * 60 * 24 * 365.25; // кількість мілісекунд в році з урахуванням високосних років
      // console.log(msInYear)
  const age = Math.floor(diffInMs / msInYear);
  // console.log(age);  

      const ageCell = document.createElement('td');
      ageCell.textContent = age;
      newRow.appendChild(ageCell);

      const addressCell = document.createElement('td');
      addressCell.textContent = data.data.address;
      newRow.appendChild(addressCell);

      tableBody.appendChild(newRow);
    });

  };

  useEffect(() => {
    addRowsToTable();
  }, [tableData]);

  //зберігаємо дані в локальне сховище
  const savedTableData = () => {
const tableRows = document.querySelectorAll('#tableBody tr')
console.log(tableRows)
const tableDatas =[]
tableRows.forEach(row => {
  const rowData = {
    name: row.cells[1].textContent,
    date: row.cells[2].textContent,
    age: row.cells[3].textContent,
    address: row.cells[4].textContent
  }
  tableDatas.push(rowData)
})
 localStorage.setItem('savedTableData', JSON.stringify(tableDatas));
 console.log('save')
  }
  useEffect(() => {
    savedTableData();
  }, [tableData, savedTableData]);

  const savedData = JSON.parse(localStorage.getItem('savedTableData'));
  console.log(savedData)


  return (
    <>
      <table id='myTable'> 
        <thead>
          <tr>
            <th className='input'><input type="checkbox" /></th>
            <th>Name</th>
            <th>Date of birth</th>
            <th>Age</th>
            <th>
              <div className="city">
                <div>Address</div> 
                <div className='city2'><img src={filtr} alt='filtr' className='filtrImg'></img></div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody id="tableBody"></tbody>
      </table>
    </>
  );
}

export default Table;
