import { IAction } from './IAction';
import { IFactory } from './IFactory';

// tslint:disable:ban-types

export function Factory<TPayload, TMeta>(type: Symbol | string): IFactory<TPayload, TMeta> {
    const c: any = (payload: TPayload, meta?: TMeta): IAction<TPayload, TMeta> => {
        return meta === undefined ? { type, payload } : { type, payload, meta };
    };
    const e: any = (error: Error, meta?: TMeta): IAction<TPayload, TMeta> => {
        return meta === undefined ? { type, payload: error, error: true } : { type, payload: error, error: true, meta };
    };
    c.type = type;
    c.error = e;
    return c as IFactory<TPayload, TMeta>;
}
