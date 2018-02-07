import { IAction } from './IAction';

export interface IFactory<TPayload = any, TMeta = any> {
    readonly type: symbol | string;
    /* workaround for getting the payload type, value not defined */
    readonly Payload: TPayload;
    /* workaround for getting the meta type, value not defined */
    readonly Meta: TMeta;
    /* workaround for getting the action type, value not defined */
    readonly Action: IAction<TPayload, TMeta>;

    (payload: TPayload, meta?: TMeta): IAction<TPayload, TMeta>;
    error(error: Error, meta?: TMeta): IAction<Error, TMeta>;
}
