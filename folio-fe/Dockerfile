FROM node:lts-alpine as builder
WORKDIR /build
COPY . .
RUN yarn install
RUN yarn build

FROM node:12-alpine3.11
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /build/package.json ./
COPY --from=builder /build/yarn.lock ./
COPY --from=builder /build/.next ./.next
COPY --from=builder /build/public ./public
RUN yarn install --production
EXPOSE 3000
CMD ["yarn", "start"]