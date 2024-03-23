import {useEffect, useState} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

const TasksList=()=> {
    //хук який містить дані і їх змінює.
    // pictures - це дані. setPictures - зміна даних
    //хуки потрібні щоб слідкувати за боєктом і оновлювати його, якщо відбулися певні зміни
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get(" https://localhost:7277/api/Task/tasks").then(resp => {
            console.log("server respons = ", resp);
            setTasks(resp.data);
        })
    }, []);

    return (
        <>

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Назва справи</th>
                    <th>Опис</th>
                    <th>Редагувати</th>
                    <th>Видалити</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map((task) => (
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.name}</td>
                        <td>{task.description}</td>
                        <td><Link to={`/editTask/${task.id}`}>
                            <Button variant="warning">Редагувати</Button>
                        </Link></td>
                        <td><Link to={`/deleteTask/${task.id}`}>
                            <Button variant="danger">Видалити</Button>
                        </Link></td>
                    </tr>
                ))}

                </tbody>
            </Table>
        </>
    )

}

export default TasksList;