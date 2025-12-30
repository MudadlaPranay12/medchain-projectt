const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Enhanced Medicine Database with complete supply chain
const medicineDatabase = {
    'MED20240001': {
        medicine: {
            batch_id: 'MED20240001',
            name: 'Paracetamol 500mg Tablets',
            manufacturer: 'PharmaCorp India Ltd. (ISO 9001 Certified)',
            expiry_date: '2025-12-15',
            composition: 'Paracetamol 500mg',
            temperature_range: '15-25°C',
            mfg_date: '2024-01-10',
            status: 'VERIFIED'
        },
        supplyChain: [
            {
                step: 'manufacturer',
                organization: 'PharmaCorp Manufacturing Unit',
                timestamp: '2024-01-15 10:30:00',
                location: 'Mumbai, Maharashtra',
                temperature: '22°C',
                seal_status: 'INTACT',
                tx_hash: '0x8a2be2f1c40f9d3e1234567890abcdef1234567890abcdef1234567890abcdef',
                coordinates: '19.0760,72.8777'
            },
            {
                step: 'distributor',
                organization: 'MedDistro Logistics (Cold Chain Certified)',
                timestamp: '2024-01-18 09:15:00',
                location: 'Delhi Distribution Center',
                temperature: '18°C',
                seal_status: 'VERIFIED',
                tx_hash: '0x9b3ce1f2d50g0e4f234567890abcdef1234567890abcdef1234567890abcdef',
                coordinates: '28.6139,77.2090'
            },
            {
                step: 'wholesaler',
                organization: 'HealthWholesale Corporation',
                timestamp: '2024-01-20 14:45:00',
                location: 'Chennai Warehouse',
                temperature: '20°C',
                seal_status: 'INTACT',
                tx_hash: '0x7c4df2g3e60h1g5f34567890abcdef1234567890abcdef1234567890abcdef',
                coordinates: '13.0827,80.2707'
            },
            {
                step: 'pharmacy',
                organization: 'CityMed Pharmacy Chain (License: PH-2024-001)',
                timestamp: '2024-01-22 11:30:00',
                location: 'Bengaluru Branch',
                temperature: '23°C',
                seal_status: 'VERIFIED',
                tx_hash: '0x5d6eg3h4i70j2h6g4567890abcdef1234567890abcdef1234567890abcdef',
                coordinates: '12.9716,77.5946'
            },
            {
                step: 'customer',
                organization: 'Verified Purchase - Safe for Consumption',
                timestamp: '2024-01-25 16:20:00',
                location: 'Customer Location Verified',
                temperature: '25°C',
                seal_status: 'AUTHENTIC',
                tx_hash: '0x3e4fh5i6j80k3i7h567890abcdef1234567890abcdef1234567890abcdef',
                coordinates: '12.9716,77.5946'
            }
        ],
        blockchainVerification: {
            verified: true,
            status: 'VERIFIED',
            txHash: '0x8a2be2f1c40f9d3e1234567890abcdef1234567890abcdef1234567890abcdef',
            verificationId: 'VRF-2024-001-ABCD',
            blockNumber: 17562345,
            timestamp: Date.now()
        }
    },
    'MED20240002': {
        medicine: {
            batch_id: 'MED20240002',
            name: 'Amoxicillin 250mg Capsules',
            manufacturer: 'BioMed Solutions (FDA Approved)',
            expiry_date: '2025-06-30',
            composition: 'Amoxicillin Trihydrate',
            temperature_range: '2-8°C (Cold Chain)',
            mfg_date: '2024-01-05',
            status: 'IN_TRANSIT'
        },
        supplyChain: [
            {
                step: 'manufacturer',
                organization: 'BioMed Hyderabad Plant',
                timestamp: '2024-01-20 09:00:00',
                location: 'Hyderabad, Telangana',
                temperature: '5°C',
                seal_status: 'INTACT',
                tx_hash: '0x1a2bc3d4e50f6g7h8901234567890abcdef1234567890abcdef12345678',
                coordinates: '17.3850,78.4867'
            },
            {
                step: 'distributor',
                organization: 'In Transit - Cold Chain Monitoring Active',
                timestamp: 'Current Location • Live Tracking',
                location: 'GPS: 20.5°N, 78.3°E • En route to Chennai',
                temperature: '4°C',
                seal_status: 'MONITORING',
                tx_hash: '0x2b3cd4e5f60g7h8i901234567890abcdef1234567890abcdef123456789',
                coordinates: '20.5937,78.9629'
            },
            {
                step: 'wholesaler',
                organization: 'NOT REACHED - Expected in 2 days',
                timestamp: 'Pending',
                location: 'To be updated',
                temperature: '--',
                seal_status: 'PENDING',
                tx_hash: 'PENDING_TRANSACTION',
                coordinates: null
            },
            {
                step: 'pharmacy',
                organization: 'NOT REACHED',
                timestamp: 'Pending',
                location: 'To be updated',
                temperature: '--',
                seal_status: 'PENDING',
                tx_hash: 'PENDING_TRANSACTION',
                coordinates: null
            }
        ],
        blockchainVerification: {
            verified: false,
            status: 'IN_TRANSIT',
            txHash: '0x2b3cd4e5f60g7h8i901234567890abcdef1234567890abcdef123456789',
            verificationId: 'VRF-2024-002-EFGH',
            blockNumber: 17562456,
            timestamp: Date.now()
        }
    },
    'EXPIRED001': {
        medicine: {
            batch_id: 'EXPIRED001',
            name: 'Expired Medicine Sample',
            manufacturer: 'Unknown Source (Unverified)',
            expiry_date: '2021-12-31',
            composition: 'Unknown Composition',
            temperature_range: 'Not Monitored',
            mfg_date: '2020-06-15',
            status: 'EXPIRED'
        },
        supplyChain: [
            {
                step: 'manufacturer',
                organization: 'Unverified Manufacturer',
                timestamp: 'Unknown Date',
                location: 'Unknown Location',
                temperature: 'Unknown',
                seal_status: 'COMPROMISED',
                tx_hash: '0x0000000000000000000000000000000000000000000000000000000000000000',
                coordinates: null
            }
        ],
        blockchainVerification: {
            verified: false,
            status: 'EXPIRED',
            txHash: 'INVALID',
            verificationId: 'INVALID-VERIFICATION',
            blockNumber: 0,
            timestamp: Date.now()
        }
    },
    'FAKE001': {
        medicine: {
            batch_id: 'FAKE001',
            name: 'Suspicious Medicine Batch',
            manufacturer: 'Unverified Laboratory',
            expiry_date: '2026-03-15',
            composition: 'Unknown Chemical Mixture',
            temperature_range: 'Unknown - No Monitoring',
            mfg_date: '2023-11-20',
            status: 'COUNTERFEIT'
        },
        supplyChain: [
            {
                step: 'manufacturer',
                organization: 'Suspicious Manufacturing Facility',
                timestamp: '2024-01-10 14:00:00',
                location: 'Unregistered Location',
                temperature: '30°C',
                seal_status: 'TAMPERED',
                tx_hash: '0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                coordinates: null
            }
        ],
        blockchainVerification: {
            verified: false,
            status: 'COUNTERFEIT',
            txHash: 'FAKE_HASH',
            verificationId: 'FAKE-VERIFICATION-ID',
            blockNumber: 0,
            timestamp: Date.now()
        }
    },
    'RECALL001': {
        medicine: {
            batch_id: 'RECALL001',
            name: 'Recalled Medicine Batch',
            manufacturer: 'MediSafe Pharmaceuticals',
            expiry_date: '2025-09-30',
            composition: 'Active Ingredient + Excipients',
            temperature_range: '2-8°C',
            mfg_date: '2023-12-01',
            status: 'RECALLED'
        },
        supplyChain: [
            {
                step: 'manufacturer',
                organization: 'MediSafe Manufacturing Unit',
                timestamp: '2023-12-10 11:00:00',
                location: 'Pune, Maharashtra',
                temperature: '6°C',
                seal_status: 'RECALLED',
                tx_hash: '0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
                coordinates: '18.5204,73.8567'
            },
            {
                step: 'recall',
                organization: 'RECALL NOTICE: DO NOT DISTRIBUTE',
                timestamp: '2024-01-05 10:00:00',
                location: 'National Drug Control Authority',
                temperature: '--',
                seal_status: 'RECALLED',
                tx_hash: '0xcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
                coordinates: '28.6139,77.2090'
            }
        ],
        blockchainVerification: {
            verified: false,
            status: 'RECALLED',
            txHash: 'RECALL_ALERT_HASH',
            verificationId: 'RECALL-VERIFICATION',
            blockNumber: 17563000,
            timestamp: Date.now(),
            recall_reason: 'Potential contamination detected during quality check'
        }
    }
};

// API Routes
app.get('/api/medicine/:batchId', (req, res) => {
    const batchId = req.params.batchId;

    if (medicineDatabase[batchId]) {
        res.json({
            success: true,
            data: medicineDatabase[batchId]
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'Medicine not found in database'
        });
    }
});

app.get('/api/stats', (req, res) => {
    const stats = {
        totalMedicines: Object.keys(medicineDatabase).length,
        verified: Object.values(medicineDatabase).filter(m => m.medicine.status === 'VERIFIED').length,
        inTransit: Object.values(medicineDatabase).filter(m => m.medicine.status === 'IN_TRANSIT').length,
        expired: Object.values(medicineDatabase).filter(m => m.medicine.status === 'EXPIRED').length,
        counterfeit: Object.values(medicineDatabase).filter(m => m.medicine.status === 'COUNTERFEIT').length,
        recalled: Object.values(medicineDatabase).filter(m => m.medicine.status === 'RECALLED').length
    };

    res.json({
        success: true,
        stats: stats
    });
});

app.get('/api/scan-history', (req, res) => {
    res.json({
        success: true,
        scans: [
            { batchId: 'MED20240001', time: '10:30 AM', status: 'verified' },
            { batchId: 'FAKE001', time: '11:15 AM', status: 'counterfeit' },
            { batchId: 'EXPIRED001', time: '12:45 PM', status: 'expired' }
        ]
    });
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'MedChain API is running',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        endpoints: [
            '/api/medicine/:batchId',
            '/api/stats',
            '/api/scan-history',
            '/api/health'
        ]
    });
});

// Start server
app.listen(PORT, () => {
    console.log('🚀 MedChain Backend Server Running!');
    console.log(`📍 Local: http://localhost:${PORT}`);
    console.log('📡 API Endpoints:');
    console.log(`   GET /api/medicine/{batchId}`);
    console.log(`   GET /api/stats`);
    console.log(`   GET /api/scan-history`);
    console.log(`   GET /api/health`);
    console.log('\n📦 Sample Batch IDs:');
    console.log('   MED20240001 - Verified Medicine');
    console.log('   MED20240002 - In Transit');
    console.log('   EXPIRED001  - Expired');
    console.log('   FAKE001     - Counterfeit');
    console.log('   RECALL001   - Recalled');
});