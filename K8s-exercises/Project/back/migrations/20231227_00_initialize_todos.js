const { DataTypes, Sequelize } = require('sequelize')

module.exports = {
    up: async ({
       context: queryInterface 
    }) => {
        await queryInterface.createTable(
            'todos', {
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
            }
        )
    },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable('todos')    
  }
}