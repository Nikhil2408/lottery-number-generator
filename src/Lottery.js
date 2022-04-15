import React, {Component} from "react";
import Balls from "./Balls";
import "./styles/Lottery.css"


class Lottery extends Component{
    static defaultProps = {
        numBalls : 5,
        maxNum : 10,
        title: "Lotto"
    }
    constructor(props){
        super(props);
        this.state = {
            numsArr : Array.from({length: this.props.numBalls})
        }
        this.generateNums = this.generateNums.bind(this);
    }

    generateNums(){
        this.setState(function(currentState){
            return {
                numsArr: currentState.numsArr.map(() => {
                    return Math.floor(Math.random() * this.props.maxNum) + 1;
                }) 
            }
        });
    }
    render(){
        console.log(this.state.numsArr)
        return <div className="Lottery">
            <h3>{this.props.title}</h3>
            <div>
                {
                    this.state.numsArr.map((element) => {
                        return <Balls value={element}/>
                    })
                }
            </div>
            <button className="Lottery-btn" onClick={this.generateNums}>Generate!</button>
        </div>
    }
}


export default Lottery;