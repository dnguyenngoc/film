FROM node:alpine as builder

WORKDIR /app/

LABEL maintainer="Duy Nguyen <duyngunyenngoc@hotmail.com>"

RUN npm install

COPY ./film/ /app/

RUN npm run build

FROM nginx

EXPOSE 80

COPY --from=builder /app/build /usr/share/nginx/html
