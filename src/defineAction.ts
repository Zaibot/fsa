import { ActionFactory } from './ActionFactory';
import { createActionFactory } from './createActionFactory';

const registered = new Set<symbol | string>();

export function defineAction<TPayload = {}, TMeta = never>(type: symbol | string): ActionFactory<TPayload, TMeta> {
    if (registered.has(type)) {
        throw Error(`action ${type.toString()} has already been defined`);
    }
    registered.add(type);
    return createActionFactory<TPayload, TMeta>(type);
}
