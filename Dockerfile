FROM golang:1.22.1 as builder

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

COPY .env /app/.env

RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o /app/main ./cmd/main.go

FROM alpine:latest

WORKDIR /root/

COPY --from=builder /app/main .
COPY --from=builder /app/.env .


# Install timezone data
RUN apk add --no-cache tzdata \
    && ln -sf /usr/share/zoneinfo/Asia/Manila /etc/localtime \
    && echo "Asia/Manila" > /etc/timezone

# Set timezone environment variable
ENV TZ=Asia/Manila

RUN chmod +x /root/main

EXPOSE 8080

CMD ["/root/main"]
