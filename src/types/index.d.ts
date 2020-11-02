
interface ReduxAction {
    type: string;
    payload?: any;
    message?: string
} 

interface ReduxState {
    dataReducers: IData;
}

interface IData {
    data: string[],
    loading: boolean,
    message: string,
    error: boolean
}

