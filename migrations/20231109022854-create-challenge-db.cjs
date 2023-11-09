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
      nombre: {
        type: Sequelize.STRING
      },
      poblacion: {
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
      { nombre: 'India', poblacion: 1409902000, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'China', poblacion: 1403426000, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Estados Unidos', poblacion: 331800000, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Indonesia', poblacion: 271629000, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Pakistán', poblacion: 224654000, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Nigeria', poblacion: 219743000, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Brasil', poblacion: 211420000, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Bangladés', poblacion: 181781000, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Rusia', poblacion: 146712000, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'México', poblacion: 127792000, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Japón', poblacion: 126045000, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Filipinas', poblacion: 108772000, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Egipto', poblacion: 101000000, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Etiopía', poblacion: 100882000, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Vietnam', poblacion: 97591000, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'República del Congo', poblacion: 89561000, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Irán', poblacion: 83914000, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Turquía', poblacion: 83752000, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Alemania', poblacion: 83421000, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Tailandia', poblacion: 68232000, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Countries');
  }
};
