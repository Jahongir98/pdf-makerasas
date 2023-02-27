import React, {useEffect, useState} from 'react';
import {PDFViewer} from '@react-pdf/renderer';
import MyDocument from "./pdf";
import Editor from "./Editor";
import axios, {toFormData} from 'axios';
import UserCreate from './pages/users'

const App = () => {
    const [fields, setFields] = useState({
        year: '23',
        day: '12',
        month: 'yanvar',
        orderNumber: '5',
        author: "Axmedov Ravshanbek Rustambek o'g'li",
        speciality: "Dasturiy injinering",
        lorem1: 'Lorem ipsum dolor sit amet',
        lorem2: 'Consectetur adipisicing elit',
        lorem3: 'Adipisci alias hic optio perspiciatis',
        lorem4: 'Lorem ipsum dolor sit amet',
        lorem5: 'Consectetur adipisicing elit',
        lorem6: 'Adipisci alias hic optio perspiciatis',
        listNumber: '152486'
    })
    const [data, setData] = useState({})


    const submitData = async () => {

        try{
            const response = await axios({
                url:`http://localhost:8080/api/create_certificate`,
                method:'POST',
                data: JSON.stringify(fields),
                headers: {
                    "Content-Type": 'application/json'
                }
            });

            console.log("post data -> ", response)

        }catch(error){

        }
    }


    const keyHandler = e => {
        if (e.key === 'Enter')
            setData(fields)
    }

    useEffect(() => {
        window.addEventListener('keyup', keyHandler)
        return () => window.removeEventListener('keyup', keyHandler)
    }, [fields])

    return (
        <div style={{display: 'block'}}>
            <UserCreate/>
            <button onClick={submitData}>saqlash</button>
            {/*<Editor fields={fields} setFields={setFields}/>*/}
            {/*<PDFViewer>*/}
            {/*    <MyDocument data={data}/>*/}
            {/*</PDFViewer>*/}

        </div>

    )
}

export default App
