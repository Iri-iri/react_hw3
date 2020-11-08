import React from "react";
import "./Styles.css";

//Решение через Функциональный компонент
// const Square = ({ cssClass, label }) => {
//   return <div className={cssClass}>{label}</div>;
// }



//Решение через Классовый компонент
class Square extends React.Component {
  render() {
    return (
      <div className={this.props.cssClass}>{this.props.label}</div>
    )
  }
}

export default Square;
