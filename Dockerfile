FROM denoland/deno:1.33.4 as base

WORKDIR /app

USER deno

COPY deps.ts ./

RUN deno cache deps.ts

ADD . .

RUN deno install --allow-net --allow-read --allow-write --allow-env --allow-run --unstable --root /app main.ts

FROM alpine:3.14.2

WORKDIR /app

COPY --chown=deno:deno --from=base /app/bin/main /app/main

CMD ["/app/main"]