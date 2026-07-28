let tarefas: any = [];
interface ICriarTarefa {
    nome: string;
    descricao: string;
}

class TarefaService {
    create({ nome, descricao }: ICriarTarefa) {
        if (!nome) {
            throw new Error("Nome da tarefa é obrigatório");
        }
        if (!descricao) {
            throw new Error("Descrição da tarefa é obrigatória");
        }

        const novaTarefa = { id: Date.now().toString() + Math.random().toString().substring(2, 6), nome, descricao, concluida: false };
        tarefas.push(novaTarefa);

        return novaTarefa;
    }

    list() {
        return tarefas;
    }

    findById(id: string) {
        const tarefa = tarefas.find((t: { id: string; }) => t.id === id);
        if (!tarefa) {
            throw new Error("Tarefa não encontrada");
        }
        return tarefa;
    }

    update(id: string, nome?: string, concluida?: boolean) {
        const index = tarefas.findIndex((t: { id: string }) => t.id === id);
        if (index === -1) {
            throw new Error("Tarefa não encontrada");
        }
        const novaTarefa = { id: tarefas[index].id, nome, descricao: tarefas[index].descricao, concluida };
        tarefas[index] = novaTarefa;
        return tarefas[index];
    }
}

export { TarefaService };