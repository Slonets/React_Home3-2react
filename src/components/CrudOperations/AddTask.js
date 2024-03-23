import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import {useForm}  from 'react-hook-form';

const AddTask=()=>{

    //підключення навігації
    const navigate=useNavigate();

    //хук
    const [taskData, setTask] = useState([]);

    // Початковий стан нової справи
    const newTask = {
        id: taskData.length + 1, // отримуємо новий id
        name: "",
        description: ""
    };

    // handleSubmit у ній знаходиться функція, де надсилають форму
    // register відслідковує змінит
    const { register, handleSubmit } = useForm();

    const onSubmit = (newTask) => {
        axios.post(" https://localhost:7277/api/Task/create", newTask)
            .then(resp=>{
                setTask([...taskData, newTask]); // Оновлення стану з додаванням нової картини

                navigate('/tasks');
            })
            .catch(error => {
                console.error("Error adding picture:", error);
            });
    };

    return(
        <>
            <div className="container">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Назва справи</Form.Label>
                    <Form.Control type="text" name="name" {...register("name")} placeholder="Введи справу" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Опис справи</Form.Label>
                    <Form.Control type="text" name="description" {...register("description")} placeholder="Напиши опис своєї справи" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <input className="button" type="submit" value="Додати нову справу"/>
                </Form.Group>
            </Form>
            </div>
        </>
    )

}

export default AddTask;