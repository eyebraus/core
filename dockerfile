# syntax=docker/dockerfile:labs

# Arrange arguments
ARG projects
ARG target=development
ARG workspaceDir=/workspace

# ================
# stage
# ================
FROM docker.io/node:current-bullseye-slim AS stage
ARG workspaceDir

# Set working directory
WORKDIR ${workspaceDir}

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --include dev

# Add scripts onto container and allow them to be executed
COPY --parents scripts/* ./
RUN chmod -R a+x scripts/container/build.mts
RUN chmod -R a+x scripts/container/stage.mts
RUN chmod -R a+x scripts/container/test.mts

# Copy other files needed for subsequent targets
COPY eslint.config.ts tsconfig.json ./
COPY --parents packages/* ./

# ================
# build
# ================
FROM stage AS build
ARG projects

# Build!
RUN node --loader ts-node/esm ./scripts/container/build.mts --project ${projects}

ENTRYPOINT [ "/bin/sh", "-c" ]

# ================
# test
# ================
FROM build AS test
ARG projects

# Test!
RUN node --loader ts-node/esm ./scripts/container/test.mts --project ${projects}

ENTRYPOINT [ "/bin/sh", "-c" ]
