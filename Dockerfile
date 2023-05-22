FROM denoland/deno:1.33.4 AS base

WORKDIR /app

COPY deps.ts ./

RUN deno cache deps.ts

ADD . .

RUN deno compile -A main.ts -o deno-app

FROM denoland/deno:1.33.4 AS release

WORKDIR /app

COPY --from=base /app/deno-app ./

EXPOSE 8000

CMD ["./deno-app"]