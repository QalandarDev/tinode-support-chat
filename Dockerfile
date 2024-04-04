FROM golang:1.22-alpine

# The latest alpine images don't have some tools like (`git` and `bash`).
# Adding git, bash and openssh to the image
RUN apk update && apk upgrade && \
    apk add --no-cache bash git zip openssh


ENV GOPATH=/go
ENV GO111MODULE=on
# Set the Current Working Directory inside the container
WORKDIR $GOPATH/src/app
# 1. go mod vendor (install all vendor packages)
# 2. ./build-all.sh  build application
# 3. cp tinode.conf releases/demo/tinode.conf
# 4. cd ./releases/demo
# 5. init-db --data=./data.json
# 6. run tinode -config ../../tinode.config
#CMD ["bash", "-c","cd ./releases/demo && ./init-db --data=./data.json"]
CMD ["bash", "-c","go mod vendor && \
    rm -rf releases/demo/* &&  \
    ./build-all.sh && \
    cp tinode.conf releases/demo/tinode.conf && \
    cd ./releases/demo && \
    ./tinode -config ./tinode.conf "]

