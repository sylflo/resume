FROM node:20.9.0-alpine AS builder

WORKDIR /app

ARG GITHUB_TOKEN

ENV GATSBY_TELEMETRY_DISABLE=1
ENV GITHUB_TOKEN=${GITHUB_TOKEN}

RUN apk add g++ make py3-pip nano

COPY package*.json ./
RUN npm install
COPY . .
RUN node_modules/gatsby-cli/cli.js build

FROM nginx:alpine

COPY --from=builder /app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
