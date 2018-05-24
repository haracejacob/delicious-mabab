/**
 * Sequelize initialization module
 */
import config from '../environment';
import Sequelize from 'sequelize';

const db = {
  Sequelize,
  sequelize: new Sequelize(
    config.sequelize.database,
    config.sequelize.username,
    config.sequelize.password,
    config.sequelize.options
  )
};

// Insert models below
const User = db.sequelize.import('../../api/user/user.model');

export default db;
export { User }
