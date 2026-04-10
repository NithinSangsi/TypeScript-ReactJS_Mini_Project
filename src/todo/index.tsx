import {useState, type ChangeEvent} from "react"
import AllItems from "./items"
interface TodoItem{
    item : string,
    createdOn : Date,
    isCompleted : boolean,
    itemDescription : string,
    id : string
}
function Todo(){
    const [newTask, setNewTask] = useState<string>("")
    const [newTaskDescription, setNewTaskDescription] = useState<string>("")
    const [items, setItems] = useState<TodoItem[]>([
        {
        item:"Go to the gym",
        createdOn : new Date(),
        isCompleted : false,
        itemDescription : "Go to the gym at 6 am",
        id: "1"
         },
         {
            item:"Buy groceries",
            createdOn : new Date(),
            isCompleted : false,
            itemDescription : "Buy groceries for the week",
            id: "2"
         },
         {
            item:"Read a book",
            createdOn : new Date(),
            isCompleted : false,
            itemDescription : "Read a book for 30 minutes",
            id: "3"
         },
         {
            item:"Call a friend",
            createdOn : new Date(),
            isCompleted : false,
            itemDescription : "Call a friend to catch up",
            id: "4"
         }
    ])
    function addItem(){
       setItems(prev=>([...prev,{
        item:newTask,
        createdOn : new Date(),
        isCompleted : false,
        itemDescription : newTaskDescription,
        id: Date.now().toString()
       }]) )
    }
    function deleteItem(id: string){
        setItems(prev => prev.filter(item => item.id !== id))
    }
    function toggleComplete(id: string){
        setItems(prev => prev.map(item => item.id === id ? {...item, isCompleted: !item.isCompleted} : item))
    }
    return(
        <div className="todo-container">
            <div className="todo-header">
                <h1>✨ Let's DO ✨</h1>
                <p className="subtitle">Stay organized and get things done</p>
            </div>
            <div className="input-section">
                <div className="input-group">
                    <input 
                        type="text" 
                        name="item" 
                        id="item" 
                        placeholder="What needs to be done?" 
                        value={newTask}
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>
                            setNewTask(e.target.value)
                        }
                    />
                </div>
                <div className="input-group">
                    <textarea 
                        name="itemDescription" 
                        id="itemDescription" 
                        placeholder="Add details about your task..." 
                        value={newTaskDescription}
                        onChange={(e:ChangeEvent<HTMLTextAreaElement>)=>
                            setNewTaskDescription(e.target.value)
                        }
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className="add-button"
                    onClick={() => {
                        if (newTask.trim() !== "") {
                            addItem();
                            setNewTask("");
                            setNewTaskDescription("");
                        }
                    }}
                >
                    + Add Task
                </button>
            </div>
            <div className="items-section">
                <AllItems items={items} onDelete={deleteItem} onToggleComplete={toggleComplete}/>
            </div>
        </div>
    )
}
export default Todo