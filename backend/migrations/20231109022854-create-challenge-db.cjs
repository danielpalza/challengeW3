'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Countries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      population: {
        type: Sequelize.BIGINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    return queryInterface.bulkInsert('Countries', [
      { name: 'India', population: 1409902000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'China', population: 1403426000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Estados Unidos', population: 331800000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Indonesia', population: 271629000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pakistán', population: 224654000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nigeria', population: 219743000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Brasil', population: 211420000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bangladés', population: 181781000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Rusia', population: 146712000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'México', population: 127792000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Japón', population: 126045000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Filipinas', population: 108772000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Egipto', population: 101000000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Etiopía', population: 100882000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Vietnam', population: 97591000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'República del Congo', population: 89561000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Irán', population: 83914000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Turquía', population: 83752000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Alemania', population: 83421000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Tailandia', population: 68232000, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Countries');
  }
};
