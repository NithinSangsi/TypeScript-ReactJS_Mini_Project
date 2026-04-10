interface TodoItem{
    item : string,
    createdOn : Date,
    isCompleted : boolean,
    itemDescription : string,
    id : string
}
interface AllItemsProps{
    items : TodoItem[],
    onDelete : (id: string) => void,
    onToggleComplete : (id: string) => void
}
export default function AllItems({items, onDelete, onToggleComplete}: AllItemsProps){
    
    return(
        <div className="items-list">
        {
            items.length === 0 ? (
                <div className="empty-state">
                    <p>No tasks yet. Create one to get started! 🚀</p>
                </div>
            ) : (
                items.map(item=>{
                    return(
                        <div key={item.id} className={`todo-item ${item.isCompleted ? 'completed' : ''}`}>
                            <div className="item-checkbox">
                                <input 
                                    type="checkbox" 
                                    checked={item.isCompleted}
                                    onChange={() => onToggleComplete(item.id)}
                                    className="checkbox-input"
                                />
                            </div>
                            <div className="item-content">
                                <h2 className="item-title">{item.item}</h2>
                                <p className="item-description">{item.itemDescription}</p>
                                <div className="item-meta">
                                    <span className="item-date">📅 {item.createdOn.toLocaleDateString()}</span>
                                    <span className={`item-status ${item.isCompleted ? 'completed-status' : 'pending-status'}`}>
                                        {item.isCompleted ? "✅ Completed" : "⏳ Pending"}
                                    </span>
                                </div>
                            </div>
                            <button 
                                className="delete-button" 
                                onClick={() => onDelete(item.id)}
                                title="Delete task"
                            >
                                🗑️
                            </button>
                        </div>
                     )

                })
            )
        }
        </div>
    )   
}