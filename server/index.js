const express = require('express');
const cors = require('cors');
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const app = express();
app.use(cors());
app.use(express.json());

let isReady = false;

// Inicializa el cliente de WhatsApp
const waClient = new Client({
    authStrategy: new LocalAuth({ clientId: "LA_TARTARUGA_SESSION" }),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
    }
});

waClient.on('qr', (qr) => {
    console.log('=========================================');
    console.log('ESCANEA ESTE CÓDIGO QR CON TU WHATSAPP:');
    console.log('=========================================');
    qrcode.generate(qr, { small: true });
});

waClient.on('ready', () => {
    isReady = true;
    console.log("¡Cliente de WhatsApp listo y autenticado!");
});

waClient.initialize();

// Endpoint que recibe el POST desde la página web
app.post('/api/whatsapp', async (req, res) => {
  if (!isReady) {
    return res.status(503).json({ error: 'El cliente de WhatsApp aún no está listo. Revisa el servidor backend.' });
  }
  
  try {
    const { message } = req.body;
    // Número destino para La Tartaruga (Código de Italia +39 seguido del número, termina en @c.us)
    const targetNumber = '393513090393@c.us';
    
    // Envía el mensaje de texto
    await waClient.sendMessage(targetNumber, message);
    console.log(`Mensaje enviado exitosamente a ${targetNumber}`);
    
    res.status(200).json({ success: true, info: "Mensaje enviado por WhatsApp." });
  } catch (err) {
    console.error("Error enviando el mensaje:", err);
    res.status(500).json({ error: 'Hubo un error interno al intentar enviar el mensaje de WhatsApp.' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`Servidor Backend de La Tartaruga iniciado`);
  console.log(`Escuchando en http://localhost:${PORT}`);
  console.log(`Iniciando cliente de WhatsApp...`);
  console.log(`=========================================`);
});
