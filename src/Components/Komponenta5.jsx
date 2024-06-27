import React from "react";
import Context from "../Context/Context";

export default class Komponenta5 extends React.Component {
  static contextType = Context;

  render() {
    const { text, number } = this.context;

    const textAndNumberCtx = (
      <p>
        Komponenta 5 - Dohvaćeni text = {text}, te dohvaćeni broj iz contexta =
        {number}
      </p>
    );

    return <div>{textAndNumberCtx}</div>;
  }
}
