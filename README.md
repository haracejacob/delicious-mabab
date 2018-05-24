# delicious-mabab

This project was referenced with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 4.2.2.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 6.x.x(Recommend 8.x.x), npm >= 2.x.x(Recommend 4.x.x)
- [MySQL](https://dev.mysql.com/downloads/mysql/)

### MySQL Configuration

- Login `mysql` with `root`
- Create database `dev_mabab`

`create database dev_mabab;`

- Create user `devmabab`

`create user devmabab@localhost identified with myql_native_password by 'devmabab';`
- Grant privileges

`grant all privileges on dev_mabab.* to devmabab@‘localhost’;`
- Last

`flush privileges;`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `npm install -g babel-cli` to start the server as `babel-node server`.

3. Run `npm start` to start the server

4. Connect to `localhost:9000` to develop
