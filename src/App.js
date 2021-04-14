import React, {Component} from 'react';
import TodoInput from "./components/Todoinput";
import TodoList from "./components/Todolist";

import 'bootstrap/dist/css/bootstrap.min.css';
import {v1 as uuid} from "uuid";
class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            items:[],
            id: uuid(),
            item:"",
            editItem:false
        }
    }

    handleChange = (e) => {
        this.setState({
            item: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const newItem = {
            id: this.state.id,
            title: this.state.item
        }

        const updatedItem = [...this.state.items, newItem]
        this.setState({
            items : updatedItem,
            item : "",
            id: uuid(),
            updateItem: false
        })
    }

    clearList = () =>{
        this.setState({
            items:[],
        })
    }

    handledleDelete = (id) =>{
        const filteredItems = this.state.items.filter(item =>item.id !== id);
        this.setState({
            items : filteredItems,
        })
    }

    handleEdit = (id) =>{
        const filteredItems = this.state.items.filter(item =>item.id !== id);

        const selectedItem = this.state.items.find(item => item.id === id);
        this.setState({
            items : filteredItems,
            item : selectedItem.title,
            updateItem: true,
            id:id,
        })
    }
    render() {
        return (
            <div className="App">
                <div classNeame="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-5 mt-4">
                            <h3 className="text-capitalize text-center">
                                Todo Input
                            </h3>
                            <TodoInput
                                item={this.state.item}
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                updateItem={this.state.updateItem}
                            />
                            <TodoList
                                items={this.state.items}
                                clearList={this.clearList}
                                handleDelete = {this.handledleDelete}
                                handleEdit = {this.handleEdit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;