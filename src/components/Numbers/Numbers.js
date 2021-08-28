import React, {Component} from 'react';
import Button from "../Button/Button";
import '../Button/Button.css';


class Numbers extends Component {


    render() {
        const {numbers,deleteNumber}= this.props;
        const generatedNumbers=numbers.map((n,index)=>(
            <div className="card" key={index}>
                <h3>card here</h3>
                <h4>model:S5500</h4>
                <h4>shaft:concrete</h4>
                <h4>width of car:1600</h4>
                <h4>depth of car:2200</h4>
                <img src="https://roll-club.kh.ua/wp-content/uploads/2014/08/s-lososem-4.jpg" alt="sushi"/>
                id = {n} <Button content='X'
                handleClick={()=>deleteNumber(index)}/>
            </div>
        ));
        return (
            <div className="wrapper">
               Случайное число: {generatedNumbers}
            </div>
        );
    }
}

export default Numbers;