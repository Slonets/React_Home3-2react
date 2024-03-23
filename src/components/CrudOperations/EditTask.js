import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import Form from "react-bootstrap/Form";

const EditTask = () => {

    //отримуємо id об'єкта
    const {id} = useParams();

    const [task, setTask] = useState();

    useEffect(() => {
        axios.get(` https://localhost:7277/api/Task/${id}`).then(resp => {

            setTask(resp.data);
            console.log("server respons = ", resp);
        })
    }, [id]);

    //Навігація, щоб після успішного додавання повернутися на іншу сторінку
    const navigate = useNavigate();

    //одразу приходить параметри обраної справи по id
    //setValue відповідає за внесення значень у полі після їх завантаження
    const {register, handleSubmit, setValue} = useForm();
    const onSubmit = (formData) => {
        axios.put(`https://localhost:7277/api/Task/edit`, formData)
            .then(resp => {
                console.log("Server response:", resp);
                navigate('/tasks');
            })
            .catch(error => {
                console.error("Server error:", error);
            });
    };

    //завантажуємо першопочаткові поля об'єкта у форму
    useEffect(() => {
        if (task) {
            setValue("id", task.id);
            setValue("name", task.name);
            setValue("description", task.description);
        }
    }, [task, setValue]);

    return (
        <div className="container">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Назва справи</Form.Label>
                    <Form.Control type="text" name="name" defaultValue={task ? task.name : ""} {...register("name")} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Опис справи</Form.Label>
                    <Form.Control type="text" name="description" defaultValue={task ? task.description : ""} {...register("description")} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <input className="button" type="submit" value="Зберегти оновлення" />
                </Form.Group>
            </Form>
        </div>
    );

}

export default EditTask;