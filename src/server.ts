import express from 'express';
import { tarefaRoutes } from './routes/tarefa.routes.js';

const app = express();
const PORTA = 3333;

app.use(express.json());

app.use('/tasks', tarefaRoutes);

app.listen(PORTA, () => {
    console.log(`🚀 Servidor rodando na porta ${PORTA}`);
});