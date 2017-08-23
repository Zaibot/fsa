# @zaibot/fsa [![Coverage Status](https://coveralls.io/repos/github/Zaibot/fsa/badge.svg?branch=master)](https://coveralls.io/github/Zaibot/fsa?branch=master) [![Build Status](https://travis-ci.org/Zaibot/fsa.svg?branch=master)](https://travis-ci.org/Zaibot/fsa)

Easy type checked Flux Standard Action for TypeScript

## Installation

```sh
npm i -S @zaibot/fsa
```

## Usage

```ts
import { Action, isType } from '@zaibot/fsa';

export const HELLO_WORLD = Action<{ message: string; }>('HELLO_WORLD');

const action = HELLO_WORLD({ message: 'Hello World!' });
if (isType(action, HELLO_WORLD)) {
    console.log(action.payload.message);
}
```


```ts
import { Action, isTypeOneOf } from '@zaibot/fsa';

export const HELLO_WORLD = Action<{ message: string; }>('HELLO_WORLD');
export const WELCOME_MESSAGE = Action<{ message: string; }>('WELCOME_MESSAGE');

const action = HELLO_WORLD({ message: 'Hello World!' });
if (isTypeOneOf(action, HELLO_WORLD, WELCOME_MESSAGE)) {
    console.log(action.payload.message);
}
```
