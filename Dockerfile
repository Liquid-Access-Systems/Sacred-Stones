FROM node:12-alpine
RUN apk add --update --no-cache curl py-pip
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]