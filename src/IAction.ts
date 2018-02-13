export interface IAction<TPayload = any, TMeta = any> {
    readonly error?: boolean;
    readonly meta?: Readonly<TMeta>;
    readonly payload: Readonly<TPayload>;
    readonly type: symbol | string;
}
