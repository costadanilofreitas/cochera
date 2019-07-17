# QuebraEssa

--Iniciando o PostgreSQL:
nova aba cmd
psql -U usuario(postgres)
senha(dandan123)
\l = lista os db
create database
\c database(quebra_essa)
\dt = lista as tabelas do db

--Iniciando o MongoDB
nova aba
mongod

--Iniciando o backend:
nova aba
cd pasta_do_projeto
npm start

--Iniciando o frontend React:
nova aba
emulator -list-avds
escolhe um
emulator -no-snapshot -avd Nexus_5_API_28(emulador_escolhido)
nova aba
cd pasta_do_projeto
react-native init albums --version 0.57.0-rc.3
react-native info
react-native eject e react-native link = para alterar o nome do projeto
react-native start -- --reset-cache
react-native start
npm start
react-native run-android
nova aba
react-native run-ios

--Iniciando o frontend Vue:
nova aba
cd pasta_do_projeto
npm run serve -- --port 8081

--Parar o build:
Ctrl + C

--Iniciando o frontend Angular:
nova aba
cd pasta_do_projeto
ng serve

--Git:
git clone endereço_do_github
git bash
git init
git remote add origin git@github.com:costadanilofreitas/quebraessa.git
git status
git add pasta
git commit -m "aqui coloco uma mensagem, tipo: comitando primeiro post" 
git push -u origin master  

--Instalar Knex de forma global:
npm i -g knex

--Abrir programas com VSCode:
code .

--Alterações de Evolução:
cores: #006666 ou #003333

--Airbnb
email: web@imandy.ie
senha: 12345