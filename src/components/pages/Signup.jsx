import Form from "../Form";
import Illustration from "../Illustration";
import classes from "../../styles/Signup.module.css"
import TextInput from "../TextInput";
export default function Signup(){
    return(
        <>
             <h1>Create an account</h1>
             <div className="column"> 
                    <Illustration />
                    <Form className={`${classes.signup}`}>
                        <TextInput />
                        </Form>
             </div>
        </>
    );
}