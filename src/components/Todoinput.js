import React, {Component} from 'react';
import InputIcon from "../assets/img/input.png";

class Todoinput extends Component {
    render() {
         const { item, handleChange, handleSubmit, updateItem} = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                     <div className="input-group">
                         <div className="input-group-append">
                             <div className="input-group-text bg-primary text-white">
                                 <img src={InputIcon}/>
                                 {/*<i className="fas fa-book"></i>*/}
                             </div>
                         </div>
                         <input
                             type="text"
                             className="form-control text-capitalize"
                             placeholder="add a todo item"
                             value={item}
                             onChange={handleChange}
                         />
                     </div>
                    <button type='submit' className={
                        updateItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"
                    }>
                        {
                            updateItem
                            ?
                                "Edit Item"
                                :
                                "Add item"
                        }
                    </button>
                </form>
            </div>
        );
    }
}

export default Todoinput;