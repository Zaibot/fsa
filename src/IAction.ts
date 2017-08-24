export interface IAction<TPayload = any, TMeta = any> {
    readonly error?: boolean;
    readonly meta?: TMeta;
    readonly payload: TPayload;
    readonly type: symbol | string;
}
