import { Action } from './Action';
import { ActionFactory } from './ActionFactory';
import { isAction } from './isAction';

export function isTypeOneOf<TPayload1, TPayload2, TMeta1, TMeta2>(
    action: any,
    factory1: ActionFactory<TPayload1, TMeta1>,
    factory2: ActionFactory<TPayload2, TMeta2>,
): action is Action<TPayload1, TMeta1> | Action<TPayload2, TMeta2>;

export function isTypeOneOf<TPayload1, TPayload2, TPayload3, TMeta1, TMeta2, TMeta3>(
    action: any,
    factory1: ActionFactory<TPayload1, TMeta1>,
    factory2: ActionFactory<TPayload2, TMeta2>,
    factory3: ActionFactory<TPayload3, TMeta3>,
): action is Action<TPayload1, TMeta1> | Action<TPayload2, TMeta2> | Action<TPayload3, TMeta3>;

export function isTypeOneOf<TPayload1, TPayload2, TPayload3, TPayload4, TMeta1, TMeta2, TMeta3, TMeta4>(
    action: any,
    factory1: ActionFactory<TPayload1, TMeta1>,
    factory2: ActionFactory<TPayload2, TMeta2>,
    factory3: ActionFactory<TPayload3, TMeta3>,
    factory4: ActionFactory<TPayload4, TMeta4>,
): action is Action<TPayload1, TMeta1> | Action<TPayload2, TMeta2> | Action<TPayload3, TMeta3> | Action<TPayload4, TMeta4>;

export function isTypeOneOf(action: any, ...factories: ActionFactory[]): action is Action {
    return isAction(action) ? factories.some((factory) => action.type === factory.type) : false;
}
