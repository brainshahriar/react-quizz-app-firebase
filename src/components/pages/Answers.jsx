import classes from "./styles/Answers.module.css";
import Checkbox from "../Chechbox";

export default function Answer(){
    return(
    <div>
        <div className={classes.answers}>
      <Checkbox className={classes.answer} text="Test answer" />
    </div>
        </div>
    );

}