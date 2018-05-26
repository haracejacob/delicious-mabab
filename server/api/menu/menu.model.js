export default (sequelize, DataTypes) => {
  const Menu = sequelize.define('menu', {
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    img: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'menu',
    comment: '메뉴'
  })

  return Menu
}
