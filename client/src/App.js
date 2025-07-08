import React, { useEffect } from 'react';
import { TonConnectUIProvider, TonConnectButton } from '@tonconnect/ui-react';

const App = () => {
  useEffect(() => {
    const button = document.getElementById('ton-connect-button');
    if (button) {
      button.onclick = () => {
        alert('TON payment integration will go here');
      };
    }
  }, []);

  return (
    <TonConnectUIProvider manifestUrl="https://yourdomain.com/tonconnect-manifest.json">
      <div style={{
        fontFamily: 'Arial',
        backgroundColor: '#111',
        color: '#fff',
        padding: '20px',
        maxWidth: '500px',
        margin: 'auto',
        borderRadius: '10px'
      }}>
        <h2>Fragment</h2>
        <h3 style={{ color: 'lime' }}>vladimrgod.t.me <span style={{
          background: '#0f0',
          padding: '2px 6px',
          borderRadius: '4px',
          fontSize: '12px',
          color: '#000'
        }}>Deal In Progress</span></h3>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px',
          background: '#222',
          padding: '10px',
          borderRadius: '8px'
        }}>
          <div>
            <strong>💎 4500</strong><br/>
            ~$12411.00
          </div>
          <div>
            <strong>💎 225</strong><br/>
            ~$620.55
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <p><strong>Telegram Username:</strong> <a href="https://t.me/vladiimrgod">@vladiimrgod</a></p>
          <p><strong>Web Address:</strong> <a href="https://t.me/vladiimrgod">t.me/vladiimrgod</a></p>
          <p><strong>TON Web 3.0 Address:</strong> vladiimrgod.t.me</p>
        </div>

        <button id="ton-connect-button" style={{
          marginTop: '20px',
          backgroundColor: '#1e90ff',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '6px'
        }}>
          Start Exchange
        </button>
      </div>
    </TonConnectUIProvider>
  );
};

export default App;