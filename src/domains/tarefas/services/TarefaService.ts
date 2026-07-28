interface ICriarTarefa {
    nome: string;
    descricao: string;
}

class TarefaService {
    private static tarefas: any = []; // "Banco de Dados"

    create({ nome, descricao }: ICriarTarefa) {
        if (!nome) {
            throw new Error("Nome da tarefa é obrigatório");
        }
        if (!descricao) {
            throw new Error("Descrição da tarefa é obrigatória");
        }

        const novaTarefa = { id: Date.now().toString() + Math.random().toString().substring(2, 6), nome, descricao, concluida: false };
        TarefaService.tarefas.push(novaTarefa);

        return novaTarefa;
    }

    list() {
        return TarefaService.tarefas;
    }

    findById(id: string) {
        const tarefa = TarefaService.tarefas.find((t: { id: string; }) => t.id === id);
        if (!tarefa) {
            throw new Error("Tarefa não encontrada");
        }
        return tarefa;
    }
}

export { TarefaService };