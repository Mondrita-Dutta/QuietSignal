# ✦ QuietSignal — Your Voice, Your Privacy ✦

**◈ Target Network:** Midnight Preprod Testnet  
**◈ Hackathon Category:** Identity / Credentials & DAO Tooling (Anonymous Signals)

---

## ✧ THE PROBLEM
Organizations, DAOs, and enterprises need honest signals to make critical decisions — from decentralized governance polling to sensitive sentiment checks. However, people often hesitate to speak honestly when their identity can potentially be linked to their responses.

Traditional data collection platforms rely on centralized infrastructure where the platform or organization ultimately controls the data. Even when a broadcast is labeled anonymous, metadata such as accounts, access logs, IP addresses, or email information can potentially compromise that anonymity.

**➜ This creates a chilling effect:** when people do not fully trust the system, they self-censor.

---

## ✧ THE SOLUTION
QuietSignal is a privacy-preserving broadcast network built on the Midnight Blockchain.

Instead of sending their identity to the server, participants generate a Zero-Knowledge Proof locally on their device. 
The proof allows the network to verify:
**①** The participant is eligible for the topic.  
**②** The participant has not already broadcast a signal for this topic.  
**③** The submission is valid without revealing the participant's identity.

**◈ A unique signal token (nullifier)** prevents duplicate participation while keeping the participant unlinkable to their signal.

**➜ In simple terms:** QuietSignal lets users prove that they are allowed to participate without proving who they are.

---

## ✧ MIDNIGHT PRIVACY MODEL
QuietSignal is designed around Midnight's native privacy and selective-disclosure architecture.

**◉ PUBLIC ON-CHAIN INFORMATION**  
• Topic configuration  
• Eligibility commitment  
• Signal count  
• Verifiable broadcast results  

**◉ PRIVATE INFORMATION**  
• Participant credentials  
• Private eligibility information  
• The relationship between a participant and their broadcast  
• **Signal Intent**: The application ensures that the specific signal cannot be tied back to the wallet address of the user broadcasting it.

**◇** The participant can prove that they possess valid eligibility credentials and have not previously participated, without revealing which credential belongs to them.

**➜ This makes privacy a property of the protocol** rather than simply a promise made by a centralized platform.

### ✧ DATA MODEL

| Data Point | Type | Disclosed To |
| :--- | :--- | :--- |
| **Topic ID** | `Bytes<32>` (Public Ledger) | Everyone (Network) |
| **Signal Count** | `Uint<32>` (Public Ledger) | Everyone (Network) |
| **Signal Token Hash** | `Bytes<32>` (Public Ledger) | Everyone (Network) |
| **Participant Identity / Seed** | `Bytes<32>` (Private Witness) | Nobody (Remains Local) |
| **Eligibility Context** | ZK-Proof Context (Off-chain) | The Prover Circuit (strictly local on the client device) |

---

## ✧ TARGET USERS
**◎ Web3 Communities & DAOs**  
Private governance sentiment checks and community polling without exposing individual wallets.

**◎ Enterprises**  
Anonymous HR climate signals, internal feedback, and sensitive reporting where participants may fear retaliation.

**◎ Events & Hackathons**  
Unbiased signals from participants without forcing them to attach their identity to their responses.

---

## ✧ TECHNICAL ARCHITECTURE
**⚙ Smart Contract**  
`quietsignal.compact`, designed to support multiple independent topics on Midnight Preprod.

**⌁ Frontend**  
Next.js App Router with a responsive and polished user interface.

**◇ Wallet Integration**  
Midnight.js DApp Connector API with supported Midnight wallets (Lace/1A.M.) for local proof generation and transaction signing.

**↻ State Synchronization**  
Midnight Public Data Provider for synchronizing public topic state and verifiable broadcast data.

---

## ✧ CURRENT STATUS

**✓ PHASE 1 — HACKATHON MVP (Completed)**  
The `quietsignal.compact` contract has been deployed to Midnight Preprod, with a functional topic creation and participation flow, wallet integration, local ZK proof generation, anonymous signal broadcasting, responsive frontend, and live topic state.

**→ PHASE 2 — NEXT 3 MONTHS**  
Token-gated and dynamic eligibility, advanced analytics for topic issuers, beta testing with Web3 communities, and additional privacy-preserving signal types.

**→ PHASE 3 — MAINNET VISION (Q3 2027)**  
Move QuietSignal toward Midnight Mainnet and evolve it into an enterprise-grade privacy platform for anonymous employee feedback, whistleblower protection, corporate governance, DAO governance, and sensitive research or community polling.

---

### ✦ LONG-TERM VISION ✦
QuietSignal turns anonymous broadcasting from a promise into something that can be cryptographically verified.

**◈ Your voice.**  
**◈ Your privacy.**  
**◈ Verifiable by design.**
