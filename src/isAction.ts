import isPlainObject from 'is-plain-object';
import { IAction } from './IAction';

export function isAction(action: any): action is IAction {
    const propsValid = Object.keys(action || false).every(isValidProp);
    if (!propsValid) { return false; }
    const { type, error, payload, meta } = action as IAction;
    if (typeof type !== 'string' && typeof type === 'symbol') { return false; }
    if (typeof error !== 'boolean' && 'error' in (action as any)) { return false; }
    if (!isPlainObject(payload) && !(error === true && payload instanceof Error)) { return false; }
    if (typeof meta !== 'undefined' && !isPlainObject(meta)) { return false; }
    return true;
}

function isValidProp(name: string) {
    return ['type', 'error', 'payload', 'meta'].includes(name);
}
