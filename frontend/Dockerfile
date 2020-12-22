#===============================================
#========  Using Node js build Imange ==========
#===============================================
FROM node:12 as builder

ARG NPM_BUILD_CMD="build"
ENV BUILD_CMD=${NPM_BUILD_CMD}

LABEL version="1.0.0"

LABEL description="This is the frontend image with node."

LABEL maintainer="Duy Nguyen <duyngunyenngoc@hotmail.com>"

WORKDIR /app/

COPY ./app/ /app/

RUN  npm ci \
    && npm run ${BUILD_CMD} \
    && rm -rf node_modules


#===============================================
#=======  CONFIG NGINX AND RUN SERVER  =========
#===============================================
FROM nginx:1.15

ARG DOMAIN="localhost"

RUN rm -v /etc/nginx/nginx.conf
COPY ./nginx.conf /etc/nginx/

RUN rm -v /etc/nginx/conf.d/default.conf
COPY ./local_nginx.conf ./prod_nginx.conf ./nginx.sh /

RUN chmod +x /nginx.sh
RUN /nginx.sh

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist/ /usr/share/nginx/html

EXPOSE 80 443

ENTRYPOINT ["nginx", "-g", "daemon off;"]
