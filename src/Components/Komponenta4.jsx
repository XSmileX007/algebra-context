import { useContext } from "react";
import Context, { Consumer } from "../Context/Context";
import Komponenta5 from "./Komponenta5";

export default function Komponenta4() {
  const contextObject = useContext(Context);

  const { text, number } = contextObject;

  const textAndNumberCtx = `Dohvaćeni text = ${text}, te dohvaćeni broj iz contexta = ${number}`;

  return (
    <div>
      <h4>Komponenta 4</h4>
      <Consumer>
        {(props) => (
          <p>
            Text={props.text} a broj = {props.number}
          </p>
        )}
      </Consumer>
      <p>{textAndNumberCtx}</p>

      <Komponenta5></Komponenta5>
    </div>
  );
}
