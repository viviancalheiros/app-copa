import app from './src/app.js'; //p ter acesso as rotas

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
})
