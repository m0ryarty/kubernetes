const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class Todo extends Model {}

Todo.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
    todo: {
        type: DataTypes.TEXT    
    },
    checked: {
        type: DataTypes.BOOLEAN,
        default: false
    }
},{
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'todos'
})

module.exports = Todo
