export default (sequelize, DataTypes) => {
  const Reservation = sequelize.define('reservation', {
    status: {
      type: DataTypes.INTEGER,
      validate: {
        isIn: [[0, 1, 2]],
      },
      comment: '0: 대기중 1: 완료 2: 취소'
    },
    amount: {
      type: DataTypes.INTEGER
    },
    reservationTime: {
      type: DataTypes.DATE
    },
    additionalNotice: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'reservation',
    comment: '예약'
  });

  return Reservation
}
