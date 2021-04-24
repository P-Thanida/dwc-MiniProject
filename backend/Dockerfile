FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g npm@7.11.1
COPY index.js ./
COPY database.js ./
COPY passport.js ./
EXPOSE $PORT
CMD [ "node", "index.js" ]