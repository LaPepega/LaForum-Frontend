FROM node:alpine

EXPOSE 3000:3000

COPY . /LaForum-Frontend

WORKDIR /LaForum-Frontend

RUN npm i

RUN npm run build

WORKDIR /LaForum-Frontend/build

CMD ["node", "index.js"]