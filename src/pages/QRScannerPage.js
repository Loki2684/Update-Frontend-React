import React, { useState } from 'react';
import Header from '../components/Header';

function QRScannerPage() {
  const [scanResult, setScanResult] = useState('');
  const [cameraOn, setCameraOn] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setScanResult(`Scanned content from: ${file.name}`);
    }
  };

  return (
    <>
      <Header />
      <div className="container" style={{ textAlign: 'center' }}>
        <h2>QR Scanner</h2>

        <button className="new-button" onClick={() => setCameraOn(!cameraOn)}>
          {cameraOn ? 'Disable Camera' : 'Enable Camera'}
        </button>

        <div style={{ marginTop: '20px' }}>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            style={{ marginTop: '15px' }}
          />
        </div>

        <div style={{ marginTop: '30px' }}>
          <h4>Scan Result:</h4>
          <p>{scanResult || 'No result yet'}</p>
        </div>
      </div>
    </>
  );
}

export default QRScannerPage;
