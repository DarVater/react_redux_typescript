export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum  TodoActionTypes{
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE',
}
interface  FetchTodosAction{
    type: TodoActionTypes.FETCH_TODOS;
}
interface  FetchTodosSuccessAction{
    type: TodoActionTypes.FETCH_TODOS_SUCCESS;
    payload: any[];
}
interface  FetchTodosErrorAction{
    type: TodoActionTypes.FETCH_TODOS_ERROR;
    payload: string;
}
interface  SetTodosPage{
    type: TodoActionTypes.SET_TODO_PAGE;
    payload: number;
}

export type TodoAction =   FetchTodosAction | FetchTodosSuccessAction | FetchTodosErrorAction | SetTodosPage