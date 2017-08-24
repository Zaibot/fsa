import { IAction } from './IAction';
import { IFactory } from './IFactory';
import { isAction } from './isAction';

export function isTypeOneOf
    <TPayload1, TPayload2>(action: any, ...factories: IFactory[]):
    action is IAction<TPayload1, any> | IAction<TPayload2, any>;
export function isTypeOneOf
    <TPayload1, TPayload2, TPayload3>(action: any, ...factories: IFactory[]):
    action is IAction<TPayload1, any> | IAction<TPayload2, any> | IAction<TPayload3, any>;
export function isTypeOneOf
    <TPayload1, TPayload2, TPayload3, TPayload4>(action: any, ...factories: IFactory[]):
    action is IAction<TPayload1, any> | IAction<TPayload2, any> | IAction<TPayload3, any> | IAction<TPayload4, any>;
export function isTypeOneOf(action: any, ...factories: IFactory[]): action is IAction {
    return isAction(action) ? factories.some((factory) => action.type === factory.type) : false;
}
