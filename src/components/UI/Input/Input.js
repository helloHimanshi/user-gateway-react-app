import classes from '../../Login/Login.module.css';

const Input = (props) => {
    return (
        <>
            <div
                className={`${classes.control} ${
                    props.isValid === false ? classes.invalid : ''
                }`}
            >
                <label htmlFor={props.htmlFor}>{props.label}</label>
                <input
                    type={props.type}
                    id={props.id}
                    value={props.value}
                    onChange={props.onChangeHandler}
                    onBlur={props.onValidateHandler}
                />
            </div>
        </>
    )
}

export default Input;