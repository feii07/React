import React from "react";

const Post = (props) => {
    return (
        <div className="col-4 my-2">
            <div className="card">
                <img className="card-img-top" src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg"/>
                <div className="card-body">
                    <p className="card-title">{props.data.title}</p>
                    <p className="text-muted">{props.data.body}</p>
                </div>
                <button className="btn btn-danger" onClick={ () =>props.remove(props.data.id)}> Remove </button>
                <button className="btn btn-info" onClick={ () =>props.update(props.data.id)}> Update </button>
            </div>
        </div>
    )
}

export default Post;