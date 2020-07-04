import isPlainObject from 'is-plain-object';
import { Action } from './Action';

export function isAction(action: any): action is Action {
    if (!action) {
        return false;
    }
    const propsValid = Object.keys(action as any).every(isValidProp);
    if (!propsValid) {
        return false;
    }
    const { type, error, payload, meta } = action as Action;
    if (typeof type !== 'string' && typeof type === 'symbol') {
        return false;
    }
    if (typeof error !== 'boolean' && 'error' in (action as any)) {
        return false;
    }
    if (!isPlainObject(payload) && !(error === true && payload instanceof Error)) {
        return false;
    }
    if (typeof meta !== 'undefined' && !isPlainObject(meta)) {
        return false;
    }
    return true;
}

function isValidProp(name: string) {
    return ['type', 'error', 'payload', 'meta'].includes(name);
}
