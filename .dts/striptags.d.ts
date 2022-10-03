export namespace DefaultStateMachineOptions {
    const tagReplacementText: string;
    const encodePlaintextTagDelimiters: boolean;
}
export class StateMachine {
    constructor(partialOptions?: {});
    state: InPlaintextState;
    transitionFunction: any;
    consume(text: any): string;
}
export function striptags(text: any, options?: {}): string;
declare class InPlaintextState {
    constructor(options: any);
    options: any;
    consume(character: any, transition: any): any;
}
export {};
