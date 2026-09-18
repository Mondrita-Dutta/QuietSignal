<div align="center">
  <img src="./frontend/src/img/quietsignal-logo.jpg" alt="QuietSignal Logo" width="120" style="border-radius: 12px; margin-bottom: 20px;" />
  <h1>✦ QuietSignal ✦</h1>
  
  <p align="center">
    <strong>A Zero-Knowledge Broadcast Network for Private Signaling. Built natively on Midnight.</strong>
  </p>
  
  [![CI/CD Status]([TO_BE_PROVIDED_BY_USER])]([TO_BE_PROVIDED_BY_USER])
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![Midnight Blockchain](https://img.shields.io/badge/Network-Midnight_Preprod-558763.svg)](https://midnight.network/)
  [![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)

  *Signal safely. Cryptographic anonymity protecting your voice.*

</div>

---

## ✧ SUBMISSION DETAILS & QUICK LINKS

*   **⎈ Network**: Midnight Preprod Testnet
*   **▤ GitHub Repository**: [[TO BE PROVIDED BY USER]]
*   **⌁ Live Demo**: [[TO BE PROVIDED BY USER]]
*   **▷ Demo Video**: [[TO BE PROVIDED BY USER]]
*   **🐦 Product X Profile**: [[TO BE PROVIDED BY USER]]
*   **⚙ Smart Contract**: [`quietsignal.compact`](./backend/contracts/quietsignal.compact)
*   **⌖ Contract Address**: `0x2cbe0f07410cee0dbab1dba091aa8484cf04a633c274a9f22e64292592fda422`

---

## ◈ THE VISION: WHY QUIETSIGNAL?

In traditional systems, establishing a secure feedback or whistleblowing channel is incredibly difficult. Centralized servers maintain logs, IP addresses, and metadata that can effortlessly de-anonymize a user, leading to a profound chilling effect on critical communications. 

**QuietSignal** leverages Zero-Knowledge cryptography to solve this. Instead of trusting a centralized database not to look at your identity, QuietSignal mathematically prevents them from being able to.

Through the Midnight blockchain and the `@midnight-ntwrk/midnight-js-protocol`, all `broadcastSignal` transactions compute a Zero-Knowledge Proof natively inside the user's browser. The blockchain verifies the proof without ever exposing who broadcasted the signal.

## ◈ RUN LOCALLY

### 1. Requirements
- Node.js v22
- Midnight Compact Compiler (`npm i -g @midnight-ntwrk/compact-compiler`)
- Docker (for local Midnight Node)

### 2. Backend Setup
```bash
cd backend
npm install
npm run compile
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run build
npm run dev
```

For advanced usage and instructions on connecting your 1A.M. wallet, refer to our [Usage Guide](./docs/USAGE.md).
