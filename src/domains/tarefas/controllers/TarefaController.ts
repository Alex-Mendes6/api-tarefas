import type { Request, Response } from "express";
import { TarefaService } from "../services/TarefaService.js";

class TarefaController {
    create(req: Request, res: Response) {
        try {
            const { nome, descricao } = req.body;
            const service = new TarefaService();
            const tarefa = service.create({ nome, descricao });
            return res.status(201).json(tarefa);
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    list(req: Request, res: Response) {
        const service = new TarefaService();
        const tarefas = service.list();
        return res.status(200).json(tarefas);
    }

    findById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            // verificando se req.params enviou uma string
            if (!id || typeof id !== 'string') {
                return res.status(400).json({ erro: 'ID inválido' });
            } 
            const service = new TarefaService;
            const tarefa = service.findById(id);
        } catch (error: any) {
            if (error.message === 'Tarefa não encontrada') {
                return res.status(404).json({ erro: 'Tarefa não encontrada'});
            }
            return res.status(400).json({ erro: error.message });
        }
    }
}

export { TarefaController };