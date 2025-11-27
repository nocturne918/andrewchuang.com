FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# Install/cache dependencies into temp directory
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# Copy all deps and build the app
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# Build
ENV NODE_ENV=production
RUN bun run build

# Release stage: copy production deps and built assets
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/package.json .
COPY --from=prerelease /usr/src/app/.next ./.next
COPY --from=prerelease /usr/src/app/public ./public

# Run the app
USER bun
EXPOSE 3000/tcp
ENTRYPOINT ["bun", "run", "start"]
