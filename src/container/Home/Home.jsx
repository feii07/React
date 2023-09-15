import React, {Component} from "react";
import LifeCycleComp from "../../component/LifecycleComponent/LifeCycleComp";

class Home extends Component {
    render() {
        return (
            <div>
                <p> Lifecycle Component </p>
                <hr/>
                <LifeCycleComp/>
            </div>
        )
    }
}

export default Home;