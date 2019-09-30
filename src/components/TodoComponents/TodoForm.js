import React from 'react'

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            item: ''
        };
    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitItem = e => {
        e.preventDefault();
        this.props.addTask(this.state.item)
    };

    render(){
        return(
            <form onSubmit={this.submitItem}>
               <input
                type='text'
                name="item"
                value={this.item}
                onChange={this.handleChange}
                />
               <button type="submit">Add Item</button>
            </form>
        )
    }
};

export default TodoForm;