FROM node:12-alpine3.11 as builder

ENV NODE_ENV production

COPY . .

RUN yarn install --prod
RUN yarn build

FROM node:12-alpine3.11

RUN mkdir /folio-fe
WORKDIR /folio-fe

COPY --from=builder package.json /folio-fe/
COPY --from=builder yarn.lock /folio-fe/
COPY --from=builder .next /folio-fe/
COPY --from=builder public /folio-fe/

RUN yarn install --prod

CMD "yarn" "start"