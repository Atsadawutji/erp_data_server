# FROM ubuntu:bionic-20200311

FROM debian:buster-slim

WORKDIR /install

RUN apt-get update && apt-get install curl unzip -y
RUN curl -fsSL https://deno.land/x/install/install.sh | sh

ENV DENO_INSTALL="/root/.deno"
ENV PATH="$DENO_INSTALL/bin:$PATH"

WORKDIR '/app'

# COPY . .
# CMD [ "deno" , "run" ,"--allow-net", "--allow-read" ,".\server.ts" ]
# ENTRYPOINT ["deno"]