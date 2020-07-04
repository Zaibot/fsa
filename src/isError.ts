import { Action } from './Action';
import { isAction } from './isAction';

export function isError(action: any): action is Action<Error, any> {
    return isAction(action) ? action.error === true : false;
}
