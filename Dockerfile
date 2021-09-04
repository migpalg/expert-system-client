FROM node:lts-alpine AS builder

WORKDIR /app

COPY . .

ENV NODE_ENV=production

RUN yarn install --frozen-lockfile
RUN yarn run build

FROM nginx:stable-alpine AS production

COPY etc/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /usr/share/nginx/html

WORKDIR /app

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
