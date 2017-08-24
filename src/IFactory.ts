import { IAction } from './IAction';

export interface IFactory<TPayload = any, TMeta = any> {
    readonly type: symbol | string;

    (payload: TPayload, meta?: TMeta): IAction<TPayload, TMeta>;
    error(error: Error, meta?: TMeta): IAction<Error, TMeta>;
}
