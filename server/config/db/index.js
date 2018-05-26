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
const Reservation = db.sequelize.import('../../api/reservation/reservation.model')
const Menu = db.sequelize.import('../../api/menu/menu.model')
const ReservationMenu = db.sequelize.import('../../api/reservationMenu/reservationMenu.model')
const Category = db.sequelize.import('../../api/category/category.model')

User.hasMany(Reservation, {
  foreignKey: 'userId',
  onDelete: 'SET NULL',
  onUpdate: 'CASCADE',
})

Category.hasMany(Menu, {
  foreignKey: 'categoryId',
  onDelete: 'SET NULL',
  onUpdate: 'CASCADE',
})

Menu.belongsTo(Category)

Reservation.belongsToMany(Menu, {
  through: ReservationMenu,
  foreignKey: 'reservationId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})
Menu.belongsToMany(Reservation, {
  through: ReservationMenu,
  foreignKey: 'menuId',
  onDelete: 'NO ACTION',
  onUpdate: 'CASCADE'
})

export default db;
export {User, Reservation, Menu, ReservationMenu, Category }
