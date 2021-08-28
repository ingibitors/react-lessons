import React, {Component} from 'react';

class Button extends Component {
    render() {
        //Передаем текст кнопки content и функция по нажатию handleclick
        const {content,handleClick}=this.props;

        return (
                <button onClick={handleClick}>{content}</button>
        );
    }
}

export default Button;