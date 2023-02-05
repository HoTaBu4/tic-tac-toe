import cl from './button.module.css'

const Button = ({onclick,...props}) =>{
    return(
        <button className={cl.button} onClick ={onclick}>
            {props.children}
        </button>
    )
}
export default Button