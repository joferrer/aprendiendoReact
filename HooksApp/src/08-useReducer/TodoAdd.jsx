import { useForm } from "../Hooks/useForm";



export const TodoAdd = ({onNewTodo}) => {

    const {formValues, oninputChange, onResetForm} = useForm({
        description:''
    });

    const {description} = formValues;

    const onSubmitTodo = (event)=>{

        event.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        onNewTodo(newTodo);
        onResetForm();
    };
    

  return (
    <>
        <h4>Agregar TODO</h4>
        <hr />

        <form onSubmit={onSubmitTodo}>
            <input type="text" 
                    placeholder="¿Qué hay que hacer?" 
                    className="form-control" 
                    onChange={oninputChange}
                    name="description"
                    value={description}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
                onClick={onSubmitTodo}
            >
                Agregar</button>


        </form>
    </>
  )
}
