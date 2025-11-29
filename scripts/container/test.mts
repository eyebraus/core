#!/usr/bin/env node --loader ts-node/esm

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { Project } from '../common/project.mjs';
import { run } from '../common/run.mjs';

const { project: projects } = yargs(hideBin(process.argv))
    .options({
        project: { alias: 'p', choices: Object.keys(Project), default: Object.keys(Project), type: 'array' },
    })
    .parseSync();

const exitCode = await run('npm', [
    'run',
    'test',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    ...projects.map((name) => `--workspace=${Project[name as Project].directory}`),
]);

if (exitCode !== 0) {
    throw new Error('Test failed');
}
