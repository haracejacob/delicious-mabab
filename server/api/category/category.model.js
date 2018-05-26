export default (sequelize, DataTypes) => {
  const Category = sequelize.define('category', {
    name: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'category',
    comment: '카테고리'
  });

  return Category
}
