export interface Action<TPayload = unknown, TMeta = unknown> {
    readonly error?: boolean;
    readonly meta?: Readonly<TMeta>;
    readonly payload: Readonly<TPayload>;
    readonly type: symbol | string;
}
