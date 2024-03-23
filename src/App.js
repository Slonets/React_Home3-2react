import './App.css';
import Info from "./components/inform/information"
import {Route, Routes} from "react-router-dom";
import List from "./components/listTask/list"
import Layout from "./components/layout/Layout";
import AddTask from "./components/CrudOperations/AddTask";
import EditTask from "./components/CrudOperations/EditTask";
import DeleteTask from "./components/CrudOperations/DeleteTask";

function App() {
  return (
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Info/>}/>
                    <Route path="tasks" element={<List/>}/>
                    <Route path="addTask" element={<AddTask/>}/>
                    <Route path="editTask/:id" element={<EditTask/>}/>
                    <Route path="deleteTask/:id" element={<DeleteTask/>}/>
                </Route>
            </Routes>
  );
}

export default App;
