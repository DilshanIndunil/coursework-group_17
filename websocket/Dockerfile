# websocker/Dockerfile
FROM node:18

# Set working directory containerr
WORKDIR /usr/src/app

# Copy package.json and package-lock.json   ok!
COPY package*.json ./

# Install dependenciess
RUN npm install

# Copy the rest of the application filess
COPY . .

# Expose port 3001
EXPOSE 3001

# Start the WebSocket server
CMD ["node", "server.js"]
