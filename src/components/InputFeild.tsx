import React, {useRef} from 'react'
import './styles.css'
import { Props } from './types'


const InputFeild: React.FC<Props> = ({todo, setTodo, handleAdd}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='input' 
        onSubmit={(e) => {
        handleAdd(e); 
        inputRef.current?.blur();
        }}>
        <input 
        ref={inputRef}
        type="input"
        value={todo}
        onChange={
            (e) => setTodo(e.target.value)
        }
        placeholder='Enter a task' className='input_box'/>
        <button className='input_submit' type='submit'>Go</button>
    </form>
  );
};

export default InputFeild
