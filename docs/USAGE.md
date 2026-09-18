# Usage Guide: QuietSignal

Welcome to the **QuietSignal** end-user guide. This document explains how you can securely interact with our Zero-Knowledge broadcast network.

## Prerequisites
1. **Midnight 1A.M. Wallet:** You must have the [1A.M. Wallet](https://midnight.network) installed in your browser.
2. **Testnet Tokens:** Ensure your wallet is configured for the **Preprod Testnet** and contains tNIGHT tokens for gas.

## How to Broadcast a Signal

1. **Navigate to the dApp:** Open `[TO BE PROVIDED BY USER]` in your browser.
2. **Connect Wallet:** Click the "Connect Wallet" button. This connects the Midnight.js SDK to your 1A.M. wallet extension.
3. **Select a Topic:** Browse the active topics (e.g., "Corporate Whistleblowing", "DAO Proposal Feedback").
4. **Broadcast:** Enter your signal and click "Broadcast Signal".
5. **Zero-Knowledge Proof Generation:**
   - Your browser will briefly pause while the `@midnight-ntwrk/midnight-js-protocol` computes a ZK-SNARK locally.
   - This cryptographic proof verifies that your signal is valid and you haven't double-voted, **without revealing your Wallet ID or your secret seed**.
6. **Sign Transaction:** The 1A.M. wallet will pop up asking you to sign the transaction.
7. **Confirmation:** Once confirmed, the topic counter on the public ledger will increment. Your anonymity remains mathematically secure.

## The Privacy Model: What is Public vs. Private?

| Data Point | Visibility | Why? |
| :--- | :--- | :--- |
| **Topic ID** | **Public** | The blockchain must know which topic is receiving the signal to increment the correct counter. |
| **SignalToken (Nullifier)** | **Public** | A cryptographic hash derived off-chain. It is public so the network can reject duplicate submissions from the same user, but it cannot be reverse-engineered to reveal the user. |
| **Wallet ID (Identity)** | **Private** | Never sent to the contract or disclosed. |
| **Secret Seed** | **Private** | Never sent to the contract or disclosed. Used strictly locally to generate the SignalToken. |
