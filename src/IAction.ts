export interface IAction<TPayload = {}, TMeta = void> {
    readonly error?: boolean;
    readonly meta?: TMeta;
    readonly payload: TPayload;
    // tslint:disable-next-line:ban-types
    readonly type: Symbol | string;
}
