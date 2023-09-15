import React, {Component} from "react";

class LifeCycleComp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count : 1
        }
    }

    static getDerivedStateFromProps(props, state)
    {
        console.log('get derived state');
        return null;
    }
    
    componentDidMount () {
        console.log('component did mount');
    }
    
    shouldComponentUpdate (nextProps, nextState) {
        console.log('should component update');
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('get snapshot');
    }
    
    componentDidUpdate (prevProps, prevState, snapshot) {
        console.log('component get update');
    }
    
    componentWillUnmount () {
        console.log('component will unmount');
    }

    render() {
        return(
            <button className="btn btn-outline-danger"> Component Button </button>
        )
    }
}

export default LifeCycleComp;