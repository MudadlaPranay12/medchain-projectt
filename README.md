# 🏥 MedChain - Blockchain Medicine Verification System

## 🚀 Hackathon Ready Prototype

MedChain is a blockchain-powered medicine verification system that combats counterfeit and expired medicines using QR code scanning and immutable ledger technology.

## 🌟 Features

### 🛡️ **Core Features**
- **QR Code Verification** - Instant medicine authenticity check
- **Blockchain Ledger** - Immutable supply chain tracking
- **Multi-language Support** - 5 Indian languages (EN, HI, TE, TA, ML)
- **AI Voice Assistant** - Real-time safety guidance
- **Supply Chain Visualization** - Interactive journey mapping
- **Smart Detection** - Identifies 5 fraud types
- **Accessibility** - Voice output for visually impaired

### 🎯 **Detection Scenarios**
1. ✅ Verified Medicine - Complete supply chain
2. 🚧 In Transit - Missing final steps
3. ⚠️ Expired - Past expiry date
4. 🚨 Counterfeit - Fake/tampered medicine
5. 🔴 Recalled - Manufacturer recall batch

## 🏗️ Architecture
MedChain follows a modular, blockchain-inspired architecture designed for transparency, security, and ease of deployment in a hackathon environment. The system is divided into four main layers, each with a clearly defined role.

🔹 1. User Interface Layer (Frontend)

Who uses it?

Consumers

Pharmacists

Inspectors / Authorities (demo mode)

Components:

Web Interface (HTML, CSS, JavaScript)

Medicine QR code scanning (camera or image upload)

Multi-language UI (English, Hindi, Telugu, Tamil, Malayalam)

Visual indicators (Verified ✅, Warning ⚠️, Dangerous 🚨)

Voice Assistant Module

Converts verification results into spoken guidance

Supports regional languages for accessibility

Supply Chain Visualizer

Step-by-step journey of medicine (Manufacturer → Distributor → Pharmacy)

Output:

Real-time verification result

Fraud alerts and safety instructions

🔹 2. Application Logic Layer

This layer acts as the brain of MedChain.

Core Modules:

QR Verification Engine

Decodes QR data

Extracts medicine ID, batch number, and timestamps

Fraud Detection Engine

Checks for:

Missing supply chain steps

Expired medicines

Duplicate or tampered QR codes

Recalled batches

Language & Voice Controller

Maps user-selected language to text and voice output

Rule-Based AI Logic

Decides verification status based on predefined safety rules

Output:

Verification status (Verified / Expired / Counterfeit / Recalled / In Transit)

🔹 3. Blockchain-Inspired Ledger Layer

Instead of a heavy public blockchain, MedChain uses a lightweight immutable ledger model.

Key Concepts:

Each supply chain event is stored as a block

Every block contains:

Medicine ID

Batch number

Timestamp

Actor (Manufacturer / Distributor / Pharmacy)

Previous block hash

Any tampering breaks the chain integrity

Benefits:

Immutability

Traceability

Easy verification without high gas costs

🔹 4. Data Storage Layer

Storage Mechanism:

JSON-based structured data (can be upgraded to DB/Firebase)

Separate datasets for:

Medicine registry

Supply chain logs

Recall and expiry information

Why this approach?

Fast

Offline-demo friendly

Easy to migrate to real blockchain or cloud databases

🔄 System Flow (End-to-End)

User scans medicine QR code

QR data is sent to verification engine

Ledger integrity and supply chain history are validated

Fraud detection rules are applied

Result is displayed visually and announced via voice assistant

🧩 Architecture Highlights

Modular & scalable

Blockchain principles without heavy infrastructure

Accessibility-first design



