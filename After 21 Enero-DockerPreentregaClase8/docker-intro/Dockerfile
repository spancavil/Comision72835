# Utiliza una imagen base de Node.js LTS (por ejemplo, Node.js 22)
FROM node:22-alpine

# Establecemos el working dir dentro del container
WORKDIR /app

# Copia los archivos de tu proyecto al contenedor. ./ hace referencia al working dir
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copiamos el código fuente al working dir
COPY src ./src

# Exponemos el puerto 3000
EXPOSE 8080

# Define el comando a ejecutar cuando se inicia el contenedor
CMD ["node", "./src/server.js"]