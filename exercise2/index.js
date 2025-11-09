const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para processar JSON
app.use(express.json());

// Middleware para servir arquivos estáticos (se necessário)
app.use(express.static('public'));

// Rota principal
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" type="text/css" href="styles.css">
      <title>Meu Ambiente Frontend</title>
    </head>
    <body>
      <div class="container">
        <h1>🚀 Ambiente Frontend</h1>
        <span class="badge">✓ Servidor Ativo</span>
        
        <div class="info">
          <strong>Servidor Express rodando com sucesso!</strong>
        </div>
        
        <h2>Ferramentas Configuradas:</h2>
        <ul>
          <li><strong>Express</strong> - Framework web para Node.js</li>
          <li><strong>ESLint</strong> - Análise estática de código</li>
          <li><strong>Prettier</strong> - Formatação automática</li>
          <li><strong>Nodemon</strong> - Reinicialização automática</li>
        </ul>
        
        <h2>Endpoints Disponíveis:</h2>
        <ul>
          <li><code>GET /</code> - Esta página</li>
          <li><code>GET /api/status</code> - Status da API</li>
          <li><code>GET /api/info</code> - Informações do projeto</li>
        </ul>
      </div>
    </body>
    </html>
  `);
});

// Rota de API - Status
app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Rota de API - Informações
app.get('/api/info', (req, res) => {
  res.json({
    project: 'meu-ambiente-frontend',
    version: '1.0.0',
    node_version: process.version,
    environment: process.env.NODE_ENV || 'development',
  });
});

// Rota 404 - Não encontrado
app.use((req, res) => {
  res.status(404).json({
    error: 'Rota não encontrada',
    path: req.path,
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`\n🚀 Servidor rodando na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}`);
  console.log(`\n Ambiente: ${process.env.NODE_ENV || 'development'}`);
  console.log('Iniciado em:', new Date().toLocaleString('pt-BR'));
  console.log('\n💡 Pressione Ctrl+C para parar o servidor\n');
});
