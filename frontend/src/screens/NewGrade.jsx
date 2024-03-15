
const NewGrade = () => {
    return (
        <div className="smth">
            <h1>Add grade</h1>
            <input type="text" placeholder="Student" />
            <h1>Grade: </h1>
            <select name="grade" >
                <option value="6">6</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
            </select>
            <input type="date" placeholder="date" />
            <input type="text" placeholder="comment" />


        </div>
    );
}

export default NewGrade