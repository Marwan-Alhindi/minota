import { Html, PivotControls } from '@react-three/drei';
import { useRef, useState } from 'react';

export default function Chat({ occluders = [] }) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch('http://localhost:8000/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: input }),
      });
      const data = await response.json();
      const botMessage = { sender: 'bot', text: data.answer };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('Error fetching answer:', err);
    }

    setInput('');
  };

  return (
    <PivotControls scale={2} anchor={[0, 1.5, 0]}>
      <mesh position={[0, 8, -5]} visible={false}>
        <boxGeometry args={[0.001, 0.001, 0.001]} />
      </mesh>


        {/* Html UI rendered BELOW the anchor mesh */}
        <Html position={[0, 3.5, -5]} transform occlude={occluders}>
          <div
            style={{
              width: '300px',
              height: '300px',
              background: '#f4f4f4',
              borderRadius: '8px',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              fontFamily: 'sans-serif',
            }}
          >
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                marginBottom: '10px',
                paddingRight: '4px',
                maxHeight: '200px',
              }}
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    textAlign: msg.sender === 'user' ? 'right' : 'left',
                    marginBottom: '6px',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '6px 10px',
                      borderRadius: '12px',
                      background:
                        msg.sender === 'user' ? '#007bff' : '#e0e0e0',
                      color: msg.sender === 'user' ? 'white' : 'black',
                      maxWidth: '80%',
                      wordWrap: 'break-word',
                    }}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type here"
                style={{
                  flex: 1,
                  padding: '8px',
                  borderRadius: '6px 0 0 6px',
                  border: '1px solid #ccc',
                  borderRight: 'none',
                }}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                style={{
                  padding: '8px 12px',
                  background: '#007bff',
                  color: 'white',
                  border: '1px solid #007bff',
                  borderRadius: '0 6px 6px 0',
                  cursor: 'pointer',
                }}
              >
                Send
              </button>
            </div>
          </div>
        </Html>
    </PivotControls>
  );
}