import './ExpenseItem.css'


function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>December 18</div>
            <div className="expense-item__description">
                <h2>Argentina WC champions</h2>
            </div>
            <div className="expense-item__price">Lionel Messi</div>
        </div>
    );
}

export default ExpenseItem;