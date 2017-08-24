import { Factory } from './Factory';
import { IFactory } from './IFactory';

const registered = new Set<symbol | string>();

export function Action<TPayload = {}, TMeta = {}>(type: symbol | string): IFactory<TPayload, TMeta> {
    if (registered.has(type)) {
        throw Error(`action ${type} has already been defined`);
    }
    registered.add(type);
    return Factory<TPayload, TMeta>(type);
}
