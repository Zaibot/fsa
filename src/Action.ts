import { Factory } from './Factory';
import { IFactory } from './IFactory';

// tslint:disable:ban-types

const registered = new Set<Symbol | string>();

export function Action<TPayload = {}, TMeta = void>(type: Symbol | string): IFactory<TPayload, TMeta> {
    if (registered.has(type)) {
        throw Error(`action ${type} has already been defined`);
    }
    registered.add(type);
    return Factory<TPayload, TMeta>(type);
}
