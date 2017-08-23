import { IAction } from './IAction';
import { isAction } from './isAction';

export function isError(action: any): action is IAction<any, any> {
    return isAction(action) ? action.error === true : false;
}
