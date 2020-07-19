FROM node:12-3.11

ENV PORT 3000
ENV NODE_ENV production

RUN mkdir /folio-fe
WORKDIR /folio-fe

COPY package.json /folio-fe/
COPY yarn.lock /folio-fe/
RUN yarn install

COPY node_modules /folio-fe/
COPY package.json /folio-fe/
COPY .next /folio-fe/

RUN yarn build

CMD "yarn" "start"