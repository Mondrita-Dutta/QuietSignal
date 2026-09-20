# Product Proposal: QuietSignal

## 1. Project Title
QuietSignal

## 2. Selected Category
Identity / Credentials & DAO Tooling

## 3. Product Vision
QuietSignal is a decentralized, Zero-Knowledge broadcast network designed to eliminate the chilling effect in sensitive data collection. By leveraging the Midnight blockchain, organizations can deploy "Topics" (e.g., whistleblowing, anonymous DAO voting, sensitive corporate feedback) and receive signals from participants with mathematical guarantees of anonymity. 

Traditional platforms force users to trust the centralized server operator not to peek at access logs or metadata. QuietSignal moves the trust from "promises" to "cryptography."

## 4. How It Works (The ZK Flow)
1. **Topic Creation:** An organization deploys a Topic ID to the public ledger.
2. **Local Proof Computation:** A user selects the Topic and writes their signal. The Midnight.js SDK computes a ZK-SNARK locally on the user's machine.
3. **Selective Disclosure:** 
   - The user's Identity (Wallet Address) remains absolutely **Private**.
   - The user's `SecretSeed` remains **Private**.
   - A `SignalToken` (Nullifier) is derived locally and disclosed **Publicly** to prevent double-signaling.
   - The `Topic ID` is disclosed **Publicly** to increment the correct counter.

## 5. Technical Stack
- **Smart Contract:** Midnight Compact (`quietsignal.compact`)
- **Frontend:** Next.js 14, Tailwind CSS, TypeScript
- **Integration:** `@midnight-ntwrk/midnight-js-protocol`
- **Network:** Midnight Preprod Testnet

## 6. Submission Deliverables
- [x] Deployed Smart Contract Address: `0x2cbe0f07410cee0dbab1dba091aa8484cf04a633c274a9f22e64292592fda422`
- [x] Live Vercel Demo: [https://quiet-signal-bice.vercel.app/](https://quiet-signal-bice.vercel.app/)
- [x] Product X Profile: `[TO BE PROVIDED BY USER]`
- [x] Open Source GitHub Repo
- [x] Demo Video
