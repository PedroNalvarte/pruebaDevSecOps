import { useEffect, useRef, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

export default function Home() {
  const [count, setCount] = useState(0);
  const [receivedMessage, setReceivedMessage] = useState<string>('');
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Enviar datos al iframe cuando count cambie
  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage({ count }, '*');
    }
  }, [count]);

  // Manejar mensajes recibidos
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Verifica que el mensaje proviene del dominio esperado
      if (event.origin !== 'https://master.d1vid5xqqrcxyu.amplifyapp.com/') return;

      // Procesa el mensaje
      const { message } = event.data;
      if (typeof message === 'string') {
        console.log('Message received from iframe:', message);
        setReceivedMessage(message);
      }
    };

    // Escucha el evento de mensaje
    window.addEventListener('message', handleMessage);

    // Limpieza cuando el componente se desmonte
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <>
      <Navbar />
      <h1>MICROFRONT PRINCIPAL</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
          Message from iframe: {receivedMessage}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <iframe
        ref={iframeRef}
        src="https://master.d1vid5xqqrcxyu.amplifyapp.com/"
        style={{ width: '100%', height: '100vh', border: 'none' }}
        title="Microfront-2"
      />
    </>
  );
}