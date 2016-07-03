FROM node

RUN mkdir /app

WORKDIR /app

ADD .babelrc /app/.babelrc
ADD package.json /app/package.json
ADD config /app/config
ADD public /app/public
ADD bin /app/bin
ADD src /app/src

RUN npm install
RUN npm run build

EXPOSE 3000

CMD node bin/server.js
