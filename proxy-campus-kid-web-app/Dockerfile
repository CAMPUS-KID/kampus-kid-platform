FROM nginx:1.15-alpine

ENV NODE_ROOT /var/www/app
WORKDIR $NODE_ROOT
RUN mkdir log
COPY app.conf /tmp/app.nginx
COPY entrypoint.sh /

EXPOSE 4102

ENTRYPOINT ["sh", "/entrypoint.sh"]