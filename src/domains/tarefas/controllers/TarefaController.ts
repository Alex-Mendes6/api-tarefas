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
            if (!id || typeof id !== 'string') {
                return res.status(400).json({ erro: 'ID inválido' });
            } 
            const service = new TarefaService;
            const tarefa = service.findById(id);
            return res.status(200).json(tarefa);
        } catch (error: any) {
            if (error.message === 'Tarefa não encontrada') {
                return res.status(404).json({ erro: 'Tarefa não encontrada'});
            }
            return res.status(400).json({ erro: error.message });
        }
    }

    update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { nome, concluida } = req.body;

            if (!id || typeof id !== 'string') {
                return res.status(400).json({ erro: 'ID inválido' });
            }
            const service = new TarefaService();
            const tarefa = service.update(id, nome, concluida);
            return res.status(200).json(tarefa);
        } catch (error: any) {
            if (error.message === 'Tarefa não encontrada') {
                return res.status(404).json({ erro: 'Tarefa não encontrada'});
            }
            if (error.message === 'Ambos campos vazios') {
                return res.status(400).json({ erro: 'Ambos campos vazios' });
            }
            return res.status(400).json({ erro: error.message });
        }
    }

    delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            if (!id || typeof id !== 'string') {
                return res.status(400).json({ erro: 'ID inválido' });
            } 
            const service = new TarefaService;
            service.delete(id);
            return res.status(204);
        } catch (error: any) {
            if (error.message === 'Tarefa não encontrada') {
                return res.status(404).json({ erro: 'Tarefa não encontrada'});
            }
            return res.status(400).json({ erro: error.message });
        }
    }
}

export { TarefaController };