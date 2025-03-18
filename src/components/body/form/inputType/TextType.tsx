type TextTypeProps = {
    name : string
    type: string
}

function TextType (props: TextTypeProps) {
    // Render
    return (
        <div>
        <label htmlFor={props.name}>{props.name}</label>
        <input id={props.name} type={props.type} placeholder={props.name}/>
        </div>
    )
}

export default TextType;