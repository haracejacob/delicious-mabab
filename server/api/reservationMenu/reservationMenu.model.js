export default (sequelize, DataTypes) => {
  const ReservationMenu = sequelize.define('reservationMenu', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    count: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'reservationMenu',
    comment: '예약-메뉴'
  });

  return ReservationMenu
}
