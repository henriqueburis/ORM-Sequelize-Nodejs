# ORM-Sequelize-Nodejs

mkdir -> orm-sequelize
yarn init -y   => só para criar nosso package.json
mkdir src => onde fica todo nosso código da aplicão.
code.

yarn add sequelize pg =>  instalando o sequelize e o pg 

yarn add sequelize-cli -D ajuda na criação de migration

yarn sequekize init => vai cria uma serie de pasta.

Organizar as pasta /SRC  ---> /config ------ database.js => configuração de acesso ao bd
                        ---> /model
                        ---> /database ----> /migrations
                                      ----> /seeders
Na raiz criar .sequelizerc


Criando a Migrations

yarn sequelize migration:create --name-create-users

resultado => src/database/migrations/xxxxx-create-users.js 

rodando o sequelize
