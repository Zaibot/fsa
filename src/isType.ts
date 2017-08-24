import { IAction } from './IAction';
import { IFactory } from './IFactory';
import { isAction } from './isAction';

export function isType<TPayload, TMeta>(action: IAction, factory: IFactory<TPayload, TMeta>): action is IAction<TPayload, TMeta> {
    return isAction(action) ? action.type === factory.type : false;
}
