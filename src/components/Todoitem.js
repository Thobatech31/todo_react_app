import React, {Component} from 'react';
import DeleteIcon from "../assets/img/delete.png";
import EditIcon from "../assets/img/edit.png";

class Todoitem extends Component {
    render() {
        const { title, handleDelete, handleEdit } = this.props;
        return (
            <li className="list-group-item text-capitalize
            d-flex justify-content-between my-2">
                <h6> {title}</h6>
                <div className="todo-icon">

                    <span className="mx-2 text-success">
                        <img onClick={handleEdit} src={EditIcon}/>
                        {/*<i onClick={handleEdit} className="fas fa-pen"></i>*/}
                    </span>

                    <span className="mx-2 text-danger">
                        <img onClick={handleDelete} src={DeleteIcon}/>
                        {/*<i onClick={handleDelete} className="fas fa-trash "></i>*/}
                    </span>
                </div>
            </li>
        );
    }
}

export default Todoitem;