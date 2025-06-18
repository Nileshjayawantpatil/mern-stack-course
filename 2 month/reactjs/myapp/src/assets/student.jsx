function student(props) {

    return (
        <div>
            <p >Name:{props.name} </p>
            <p>Age: {props.age}</p>
            <p>student:{props.isstudent ? "Yes":"No"}</p>




        </div>
        
    );



}
export default student;
