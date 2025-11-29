#!/usr/bin/env node --loader ts-node/esm

import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { Project } from '../common/project.mjs';
import { run } from '../common/run.mjs';

const fileDirectory = dirname(fileURLToPath(import.meta.url));

const {
    container,
    project: projects,
    tag: tags,
} = yargs(hideBin(process.argv))
    .options({
        container: { alias: 'c', default: 'eyebraus.foo.build', type: 'string' },
        project: { alias: 'p', choices: Object.keys(Project), default: Object.keys(Project), type: 'array' },
        tag: { alias: 't', default: ['eyebraus.foo:local'], type: 'array' },
    })
    .parseSync();

const dockerContextDirectory = resolve(fileDirectory, '../..');
const dockerfile = resolve(fileDirectory, '../../dockerfile');

const buildExitCode = await run('docker', [
    'build',
    dockerContextDirectory,
    '--build-arg',
    `projects=${projects.join(' ')}`,
    '--file',
    dockerfile,
    ...tags.flatMap((tag) => ['--tag', `${tag}`]),
    '--target',
    'build',
]);

if (buildExitCode !== 0) {
    throw new Error('Build failed');
}

const runExitCode = await run('docker', [
    'run',
    '--name',
    container,
    '--volume',
    `${dockerContextDirectory}:/dist`,
    `${tags[0]}`,
    'node --loader ts-node/esm /workspace/scripts/container/stage.mts /dist',
]);

await run('docker', ['container', 'rm', container]);

if (runExitCode !== 0) {
    throw new Error('Build failed');
}
