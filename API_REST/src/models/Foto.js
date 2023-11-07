import Sequelize, { Model } from 'sequelize';

export default class fotoController extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            notEnpty: [3, 255],
            msg: 'Campo não pode fica vazio',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            notEnpty: [3, 255],
            msg: 'Campo não pode fica vazio',
          },
        },
      },
      sequelize,
      tableName: 'fotos',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.aluno, { foreignKey: 'aluno_id' });
  }
}
