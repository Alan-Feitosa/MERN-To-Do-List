# Usando a imagem oficial do Node.js como base
FROM node:20.3.0-slim

# Definindo o diretório de trabalho dentro do contêiner
WORKDIR /node/src/app

# Copiando o arquivo package.json e yarn.lock para o diretório de trabalho
COPY package.json yarn.lock ./

# Instalando as dependências do Node.js com Yarn
RUN yarn install

# Copiando o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

# Expondo a porta que a aplicação Node.js vai escutar
EXPOSE 3001

# Comando para iniciar a aplicação
CMD ["tail", "-f", "/dev/null"]