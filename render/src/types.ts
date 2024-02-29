export type Todo = {
    id: number,
    title: string,
    done: boolean
}

// (text: string) text파라미터의 변수 타입 string => void 리턴값의 타입이 void
export type AddTodoFunc = (text: string) => void;