export interface IAction<TPayload = {}, TMeta = {}> {
    readonly error?: boolean;
    readonly meta?: TMeta;
    readonly payload: TPayload;
    readonly type: symbol | string;
}
