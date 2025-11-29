#!/usr/bin/env node --loader ts-node/esm

import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { Project } from '../common/project.mjs';
import { run } from '../common/run.mjs';

const fileDirectory = dirname(fileURLToPath(import.meta.url));

const { project: projects } = yargs(hideBin(process.argv))
    .options({
        project: { alias: 'p', choices: Object.keys(Project), default: Object.keys(Project), type: 'array' },
    })
    .parseSync();

const projectPaths = projects.map((name) =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    resolve(fileDirectory, `../../${Project[name as Project].directory}/tsconfig.json`),
);

const exitCode = await run('npx', ['tsc', '--build', ...projectPaths]);

if (exitCode !== 0) {
    throw new Error('Build failed');
}
