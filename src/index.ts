import express from 'express';

const app = express();
const PORTA = 3333;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ mensagem: 'API funcionando!' });
});

app.post('/', (req, res) => {
    res.status(200).send('Recebemos seu POST! Obrigado!');
});

app.listen(PORTA, () => {
    console.log(`🚀 Servidor rodando na porta ${PORTA}`);
});