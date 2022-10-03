declare namespace DefaultStateMachineOptions {
    const tagReplacementText: string;
    const encodePlaintextTagDelimiters: boolean;
}
declare class StateMachine {
    constructor(partialOptions?: {});
    state: InPlaintextState;
    transitionFunction: any;
    consume(text: any): string;
}
declare function striptags(text: any, options?: {}): string;
declare class InPlaintextState {
    constructor(options: any);
    options: any;
    consume(character: any, transition: any): any;
}

export { DefaultStateMachineOptions, StateMachine, striptags };
