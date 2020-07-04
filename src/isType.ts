import { Action } from './Action';
import { ActionFactory } from './ActionFactory';
import { isAction } from './isAction';

export function isType<TPayload, TMeta>(action: Action, factory: ActionFactory<TPayload, TMeta>): action is Action<TPayload, TMeta> {
    return isAction(action) ? action.type === factory.type : false;
}
