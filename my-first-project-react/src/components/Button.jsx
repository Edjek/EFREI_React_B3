function Button(props) {
    console.log(props.class);
    return <button className={props.class}>{props.children}</button>;
}

export default Button;
