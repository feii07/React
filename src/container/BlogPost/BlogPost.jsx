import React, {Component, Fragment} from 'react';
import axios from 'axios';
import Post from '../../component/Post/Post';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: ''
        },
        isUpdate: false
    }

    componentDidMount(){
        this.getPostAPI();   
    }

    defaultBlogPost = () => {
        this.setState({
            isUpdate: false,
            formBlogPost: {
                id: 1,
                title: '',
                body: '',
                userId: ''
            }, 
        })
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((result) => {
            this.setState({
                post: result.data
            });
        })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
            this.getPostAPI(); 
        })
    }

    handleInput = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();

        formBlogPostNew[event.target.name] = event.target.value;

        if (!this.state.isUpdate)
        {
            formBlogPostNew['id'] = timestamp;
        }

        this.setState({
            formBlogPost: formBlogPostNew
        },() => {
        })
    }

    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
        
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((res) => {
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: ''
                }, 
            })
            
        })
    }

    handleSubmit = () => {
        if (this.state.isUpdate)
        {
            this.putDataToAPI();
        } else {
            this.postDataToAPI();

        }
    }

    postDataToAPI = () => {
        axios.post(`http://localhost:3004/posts`, this.state.formBlogPost).then((res) => {
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: ''
                }, 
            })
        })
    }

    render(){
        return (
            <Fragment>
                <div className='container'>
                    <div className='row'>
                        <p className='text-danger'> Blog Post </p>
                    </div>
                    <div className='row'>
                        <div className='form-group'>
                            <input type='text' className='form-control' name="title" placeholder='Add Title' onChange={this.handleInput} value={this.state.formBlogPost.title}/>
                            <textarea name="body" className="form-control" cols="30" rows="10" onChange={this.handleInput} value={this.state.formBlogPost.body}/>
                        <button className='btn btn-primary' onClick={this.handleSubmit}>Simpan</button>
                        </div>
                    </div>
                    <div className='row'>
                        {
                            this.state.post.map(post => {
                                return <Post 
                                            key={post.id} 
                                            data={post} 
                                            remove={this.handleRemove} 
                                            update={this.handleUpdate}
                                        />
                            })
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BlogPost;