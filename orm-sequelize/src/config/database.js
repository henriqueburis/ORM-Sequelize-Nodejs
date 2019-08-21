module.exports = {
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'crud_sequelize',
    dialect: 'postgres',
    operatorsAliases: true,
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
};
