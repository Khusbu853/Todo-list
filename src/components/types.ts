import { Todo } from "../types";

export interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void;
}

export interface TodoslistProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export interface SingletodoProps extends TodoslistProps {
    todo: Todo;
}