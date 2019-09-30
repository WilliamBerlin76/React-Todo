import React from 'react'

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            item: ''
        };
    }

   render(){
       return(
           <form>
               <input/>
               <button type="submit">Add Item</button>
           </form>
       )
   }
};

export default TodoForm;