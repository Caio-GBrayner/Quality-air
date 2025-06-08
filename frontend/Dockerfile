FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY . /usr/share/nginx/html/

RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html && \
    chmod 644 /usr/share/nginx/html/*.html && \
    chmod 644 /usr/share/nginx/html/*.css && \
    chmod 644 /usr/share/nginx/html/*.js

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
