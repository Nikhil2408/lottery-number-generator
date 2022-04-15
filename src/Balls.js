import React, {Component} from "react";
import "./styles/Balls.css"

class Balls extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className="Balls">
            <span>{this.props.value}</span>
        </div>
    }
}


export default Balls;