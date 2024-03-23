import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";

const DeleteTask = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const deleteTask = async () => {
            try {
                await axios.delete(`https://localhost:7277/api/Task/${id}`);
                console.log("Видалення виконано");
                navigate('/tasks');
            } catch (error) {
                console.error("Помилка при видаленні:", error);
            }
        };

        deleteTask();
    }, [id, navigate]);

    return null; // У компонента функції не повинно бути візуального представлення, тому повертаємо null
};

export default DeleteTask;