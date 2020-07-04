import { Action } from './Action';

export interface ActionFactory<TPayload = unknown, TMeta = unknown> {
    readonly type: symbol | string;
    /* workaround for getting the payload type, value not defined */
    readonly Payload: TPayload;
    /* workaround for getting the meta type, value not defined */
    readonly Meta: TMeta;
    /* workaround for getting the action type, value not defined */
    readonly Action: Action<TPayload, TMeta>;

    (payload: TPayload, meta?: TMeta): Action<TPayload, TMeta>;
    error(error: Error, meta?: TMeta): Action<Error, TMeta>;
}
