import TextType from "./inputType/TextType";

const nameInputText = [
    {name: 'nome', type: 'text'},
    {name: 'cognome', type: 'text'},
    {name: 'data di nascita', type: 'date'},
    {name: 'luogo di nascita' , type: 'text'},
    {name: 'numer telefono', type: 'number'},
    {name: 'mail', type: 'email'},
    {name: 'password', type: 'password'},
    {name: 'file', type: 'file'},
]

function Form() {
    return (
        <>
        {nameInputText.map(element => {
            return(
                <TextType name = {element.name} type={element.type}/>
            )
        })}
        </>
    )
}

export default Form;