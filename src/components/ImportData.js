import React from "react";
import './ImportData.css'

function ImportData(props) {
 const addData =()=>{
console.log(1)

 }
    return (
        <>
        <div>
            <p>Choose the file:</p>
            <input type='file' accept='.csv' className="import"></input>
            <button type='submit' onClick={addData}>Import</button>
        </div>
        </>
    )
}


export default ImportData;