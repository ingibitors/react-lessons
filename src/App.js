import React from 'react';
import './App.css';
/*import './Button/Button.css';*/
import Button from "./components/Button/Button";
import Numbers from "./components/Numbers/Numbers";


class App extends React.Component {
    state = {
        numbers: []
    }
    generateNumber = () => {
        if (this.state.numbers.length>=10){
            return
        }
        const generatedNumber = Math.floor(Math.random() * 10 + 1);
        if (!this.state.numbers.includes(generatedNumber)) {
            this.setState({
                numbers: [...this.state.numbers, generatedNumber]
            });
        }else{
            this.generateNumber()
        }
    }
    deleteNumber = (index) => {
        this.setState({
            numbers: this.state.numbers.filter((elem, i) => i !== index)
        });
    }

    render() {
        /*Деструктуризация state для того что бы не передавать в компонент <Numbers numbers={this.state.numbers}/> , а просто  <Numbers numbers={numbers}/>*/
        const {numbers} = this.state;

        return (
            <div className="App">
                {/* в компонент Button передаем props*/}
                <Button
                    content='Generate'
                    handleClick={this.generateNumber}
                />


                <Numbers numbers={numbers} deleteNumber={this.deleteNumber}/>


            </div>
        );
    }
}

export default App;
