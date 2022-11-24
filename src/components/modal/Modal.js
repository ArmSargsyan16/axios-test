import React from "react";
import "../modal/Modal.css";
import axios from 'axios'


function Modal({ show, toggleShow, delFunction, id }) {

    const deleteFunction = async () => {
        const deleteFunc = await axios.delete(`https:/jsonplaceholder.typicode.com/posts/${id}`)
        if (deleteFunc.status == "200") {
            delFunction(id)
        }
    }
    return (
        <div className="modal" tabIndex="-1" id={show ? "show" : "hide"}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleShow}></button>
                    </div>
                    <div>
                        <form>
                            <h3>Are you sure?</h3>
                            <button className="btn btn-success " style={{ margin: "10px" }}>Back</button>
                            <button className="btn btn-danger" style={{ margin: "10px" }} onClick={(e) => {
                                e.preventDefault();
                                deleteFunction()
                                toggleShow()
                            }}>Delete</button>
                        </form>
                        <div className="modal-footer">
                            <button className="btn btn-outline-secondary" onClick={toggleShow}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;