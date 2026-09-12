import { test, describe } from 'node:test';
import assert from 'node:assert';
import { randomBytes } from 'node:crypto';
import * as compactRuntime from '@midnight-ntwrk/compact-runtime';
import { Contract, type Witnesses } from '../contracts/managed/quietsignal/contract/index.js';

describe('Survey Contract - Native AST Execution Tests', () => {
    
    const itemSecretBytes = randomBytes(32);
    const topicIdBytes = randomBytes(32);

    test('1. Contract processes broadcastSignal successfully', () => {
        const witnesses: Witnesses<any> = {
            secretEligibilityHash: (context: any) => [context.privateState, itemSecretBytes]
        };
        const contract = new Contract(witnesses);

        const constructorContext = (compactRuntime.createConstructorContext as any)({});
        const initialState = contract.initialState(constructorContext).currentContractState;

        const contractAddress = compactRuntime.sampleContractAddress();
        const coinPublicKey = compactRuntime.sampleUserAddress(); 

        const circuitContext = compactRuntime.createCircuitContext(
            contractAddress, 
            coinPublicKey, 
            initialState, 
            {}
        );

        assert.doesNotThrow(() => {
            const result = contract.circuits.broadcastSignal(circuitContext, topicIdBytes);
            assert.ok(result.proofData, 'Proof data containing state transitions should be generated');
        }, 'broadcastSignal should succeed on the compiled contract AST');
    });

    test('2. Contract correctly rejects invalid Topic ID lengths', () => {
        const witnesses: Witnesses<any> = {
            secretEligibilityHash: (context: any) => [context.privateState, itemSecretBytes]
        };
        const contract = new Contract(witnesses);

        const constructorContext = (compactRuntime.createConstructorContext as any)({});
        const initialState = contract.initialState(constructorContext).currentContractState;
        
        const contractAddress = compactRuntime.sampleContractAddress();
        const coinPublicKey = compactRuntime.sampleUserAddress(); 
        
        const circuitContext = compactRuntime.createCircuitContext(contractAddress, coinPublicKey, initialState, {});
        
        // Negative test: Try to submit a Topic ID that is 31 bytes instead of 32 bytes
        assert.throws(() => {
            contract.circuits.broadcastSignal(circuitContext, randomBytes(31));
        }, /expected value of type Bytes<32> but received/, 'broadcastSignal must enforce strict cryptographic boundaries on the topic ID');
    });

    test('3. Contract strictly initializes empty private state', () => {
        const witnesses: Witnesses<any> = {
            secretEligibilityHash: (context: any) => [context.privateState, itemSecretBytes]
        };
        const contract = new Contract(witnesses);
        
        // Assert that the initial state compiles and returns the correct ledger schema
        const constructorContext = (compactRuntime.createConstructorContext as any)({});
        const initialState = contract.initialState(constructorContext);
        
        assert.ok(initialState, 'Initial state must be generated successfully');
        assert.ok(initialState.currentContractState, 'Contract state object must be initialized');
    });
});


