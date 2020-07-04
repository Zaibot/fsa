import { Action } from './Action';
import { ActionFactory } from './ActionFactory';

export function createActionFactory<TPayload, TMeta>(type: symbol | string): ActionFactory<TPayload, TMeta> {
    const c: any = (payload: TPayload, meta?: TMeta): Action<TPayload, TMeta> => {
        return meta === undefined ? { type, payload } : { type, payload, meta };
    };
    const e: any = (error: Error, meta?: TMeta): Action<Error, TMeta> => {
        return meta === undefined ? { type, payload: error, error: true } : { type, payload: error, error: true, meta };
    };
    (c as any).type = type;
    (c as any).error = e;
    return c as ActionFactory<TPayload, TMeta>;
}
