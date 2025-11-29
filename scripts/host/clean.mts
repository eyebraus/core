#!/usr/bin/env node --loader ts-node/esm

import { existsSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { Project } from '../common/project.mjs';

const fileDirectory = dirname(fileURLToPath(import.meta.url));

const { project: projects } = yargs(hideBin(process.argv))
    .options({
        project: { alias: 'p', choices: Object.keys(Project), default: Object.keys(Project), type: 'array' },
    })
    .parseSync();

projects.forEach((name) => {
    console.info(`Cleaning ${name}...`);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    const { directory } = Project[name as Project];
    const libPath = resolve(fileDirectory, `../../${directory}/lib`);
    const specPath = resolve(fileDirectory, `../../${directory}/spec`);
    const tsBuildInfoPath = resolve(fileDirectory, `../../${directory}/tsconfig.tsbuildinfo`);

    const libExists = existsSync(libPath);
    const specExists = existsSync(specPath);
    const tsBuildInfoExists = existsSync(tsBuildInfoPath);

    if (!libExists && !specExists && !tsBuildInfoExists) {
        console.info('\tNo contents to clean; skipping');
    }

    if (libExists) {
        rmSync(libPath, { force: true, recursive: true });
        console.info(`\tDeleted lib directory`);
    }

    if (specExists) {
        rmSync(specPath, { force: true, recursive: true });
        console.info(`\tDeleted spec directory`);
    }

    if (tsBuildInfoExists) {
        rmSync(tsBuildInfoPath, { force: true });
        console.info(`\tDeleted tsconfig.tsbuildinfo`);
    }
});
