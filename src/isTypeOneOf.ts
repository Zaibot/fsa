import { IAction } from './IAction';
import { IFactory } from './IFactory';
import { isAction } from './isAction';

export function isTypeOneOf<TPayload1, TPayload2, TMeta1, TMeta2>(
    action: any,
    factory1: IFactory<TPayload1, TMeta1>,
    factory2: IFactory<TPayload2, TMeta2>):
    action is IAction<TPayload1, TMeta1> | IAction<TPayload2, TMeta2>;

export function isTypeOneOf<TPayload1, TPayload2, TPayload3, TMeta1, TMeta2, TMeta3>(
    action: any,
    factory1: IFactory<TPayload1, TMeta1>,
    factory2: IFactory<TPayload2, TMeta2>,
    factory3: IFactory<TPayload3, TMeta3>):
    action is IAction<TPayload1, TMeta1> | IAction<TPayload2, TMeta2> | IAction<TPayload3, TMeta3>;

export function isTypeOneOf<TPayload1, TPayload2, TPayload3, TPayload4, TMeta1, TMeta2, TMeta3, TMeta4>(
    action: any,
    factory1: IFactory<TPayload1, TMeta1>,
    factory2: IFactory<TPayload2, TMeta2>,
    factory3: IFactory<TPayload3, TMeta3>,
    factory4: IFactory<TPayload4, TMeta4>):
    action is IAction<TPayload1, TMeta1> | IAction<TPayload2, TMeta2> | IAction<TPayload3, TMeta3> | IAction<TPayload4, TMeta4>;

export function isTypeOneOf(action: any, ...factories: IFactory[]): action is IAction {
    return isAction(action) ? factories.some((factory) => action.type === factory.type) : false;
}
