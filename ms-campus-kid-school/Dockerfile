FROM golang:1.16-alpine

ADD . /go/src/ms_campus_kid_school
WORKDIR /go/src/ms_campus_kid_school

COPY go.mod ./
COPY go.sum ./
RUN go mod download
COPY src ./

RUN go build -o /ms-campus-kid-school

EXPOSE 4004

CMD [ "/ms-campus-kid-school" ]