FROM alpine:3.16

RUN apk add --no-cache python3-dev build-base libffi-dev \
    && apk add --no-cache py3-pip

WORKDIR /app

COPY . /app

RUN \
 apk add --no-cache postgresql-libs && \
 apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
 python3 -m pip install -r requirements.txt --no-cache-dir && \
 apk --purge del .build-deps

EXPOSE 4001

CMD ["python3", "src/app.py"]