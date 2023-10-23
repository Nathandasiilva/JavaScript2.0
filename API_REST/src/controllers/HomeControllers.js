import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Nathan',
      sobrenome: 'Silva',
      email: 'nathan@gmail.com',
      idade: 21,
      peso: 85,
      altura: 1.7,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
