# ✦ How to Use QuietSignal ✦

> **Your voice. Your privacy.**
> QuietSignal lets organizations collect verified signals while mathematically guaranteeing participant anonymity using Zero-Knowledge Proofs on the Midnight Blockchain.

---

## ✧ What You Need

### For Topic Issuers (Creating Topics)
- A modern web browser (Chrome, Brave, or Firefox recommended)
- A Midnight-compatible wallet extension installed:
  - **1A.M. Wallet** *(Recommended)* — supports native in-browser proof generation
  - **Lace Wallet** — supported via remote proof server fallback
- Your wallet configured to the **Midnight Preprod Testnet**
- Testnet tDUST tokens for transaction fees (available from the Midnight faucet)

### For Participants (Broadcasting Signals)
- A modern web browser
- A Midnight-compatible wallet (1A.M. or Lace)
- The topic link or ID shared by the issuer

---

## ✧ For Topic Issuers — Creating a Topic

### Step 1: Connect Your Wallet
1. Visit [https://quiet-signal-bice.vercel.app/](https://quiet-signal-bice.vercel.app/)
2. Click **"Connect Wallet"** in the top navigation bar.
3. Select your wallet (1A.M. or Lace) from the modal.
4. Approve the connection in your wallet extension.
5. You will see a confirmation once your wallet is securely connected.

### Step 2: Create a New Topic
1. Navigate to the Topic creation interface.
2. Fill in the **Topic Title** and **Description**.
3. Click **"Create Topic"**.

> **What happens behind the scenes:**
> QuietSignal deploys your new Topic configuration to the public ledger. The network initializes a signal counter at zero and opens the Topic for anonymous participation.

### Step 3: Share the Topic
1. After creation, your Topic appears in the active list.
2. Copy and share the unique Topic link or identifier.
3. Anyone with this link and a Midnight wallet can participate anonymously.

---

## ✧ For Participants — Broadcasting an Anonymous Signal

### Step 1: Open the Topic
1. Click the link shared by the topic issuer or browse the active topics on the platform.
2. Review the topic details.

### Step 2: Connect Your Wallet
1. Click **"Connect Wallet"** to authenticate.
2. Select your wallet (1A.M. or Lace).
3. Approve the connection in your wallet extension.

### Step 3: Prepare Your Signal
1. Choose to broadcast your signal for the selected topic.
2. Your interaction is staged locally — it is never sent to any server before the ZK proof is generated.

### Step 4: Broadcast with Zero-Knowledge Proof
1. Click **"Broadcast Signal"**.
2. QuietSignal performs the following steps automatically:
   - **Generating ZK-SNARK** — A Zero-Knowledge proof is computed locally on your machine, proving your eligibility without revealing your identity.
   - **Broadcasting to Midnight** — The proof and a cryptographic **Signal Token (Nullifier)** are submitted to the Midnight Preprod network.
3. Your wallet will prompt you to sign the transaction — approve it.
4. Once confirmed, the Topic's participation counter increments globally, and your voice is heard.

> **Important:** Keep your wallet extension open and unlocked during the proof generation process. This can take a few moments depending on your device.

---

## ✧ What Gets Proved (and What Stays Private)

| What QuietSignal Proves | What Stays Private |
|---|---|
| You are eligible to participate | Your wallet address / identity |
| You have not already broadcasted | Which signal belongs to you |
| Your submission is cryptographically valid | Your local secret seed |
| The topic participation count increased | Any link between you and the signal |

**In plain English:** QuietSignal proves *that* you participated without proving *who* you are.

The Signal Token (nullifier) mechanism ensures you cannot double-vote, but an observer looking at the blockchain can only see that "someone" voted — they cannot determine which wallet or person it was.

---

## ✧ Troubleshooting

### "Transaction Failed: Duplicate Signal Token"
- This is expected behavior! The ZK nullifier system prevents double-voting per topic. The smart contract mathematically rejects your proof to prevent sybil attacks.

### "Wallet Connection Timeout"
- Ensure your wallet extension is **unlocked** and set to the **Midnight Preprod** network.
- Try disconnecting and reconnecting.

### Transaction Takes Too Long
- ZK proof generation is computationally intensive. Allow it some time to complete.
- Do not close the browser tab or lock your wallet during proof generation.

---

<div align="center">
  <sub>QuietSignal — Your voice. Your privacy. Verifiable by design.</sub>
</div>
