import { IAction } from './IAction';

export interface IFactory<TPayload, TMeta> {
    // tslint:disable-next-line:ban-types
    readonly type: Symbol | string;

    (payload: TPayload, meta?: TMeta): IAction<TPayload, TMeta>;
    error(error: Error, meta?: TMeta): IAction<Error, TMeta>;
}
