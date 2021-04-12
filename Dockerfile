FROM node:14

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm install -g typescript

RUN tsc

EXPOSE 8080

CMD ["node", "dist/src/app.js"]





