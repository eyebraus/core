#!/usr/bin/env node --loader ts-node/esm

import { existsSync, lstatSync } from 'node:fs';
import { cp, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { Project, type ProjectMetadata } from '../common/project.mjs';

const fileDirectory = dirname(fileURLToPath(import.meta.url));
const [, , dest] = process.argv;
const destPath = resolve(fileDirectory, dest);

if (!existsSync(destPath) || !lstatSync(destPath).isDirectory()) {
    throw new Error(`Path ${destPath} is not a valid directory`);
}

console.info('Staging build outputs...');

const stageDirectoryForProject = async (project: ProjectMetadata, dir: string): Promise<boolean> => {
    const { directory } = project;
    const source = resolve(fileDirectory, `../../${directory}/${dir}`);

    if (!existsSync(source)) {
        return false;
    }

    const target = resolve(destPath, `${directory}/${dir}`);
    await mkdir(target, { recursive: true });
    await cp(source, target, { force: true, recursive: true });
    console.info(`\tCopied ${source}/** -> ${target}`);

    return true;
};

const stageFileForProject = async (project: ProjectMetadata, file: string): Promise<boolean> => {
    const { directory } = project;
    const source = resolve(fileDirectory, `../../${directory}/${file}`);

    if (!existsSync(source)) {
        return false;
    }

    const target = resolve(destPath, `${directory}/${file}`);
    await mkdir(dirname(target), { recursive: true });
    await cp(source, target, { force: true });
    console.info(`\tCopied ${source} -> ${target}`);

    return true;
};

const stageProject = async (project: ProjectMetadata): Promise<void> => {
    const { name } = project;

    const [libStaged, specStaged, tsBuildInfoStaged] = await Promise.all([
        stageDirectoryForProject(project, 'lib'),
        stageDirectoryForProject(project, 'spec'),
        stageFileForProject(project, 'tsconfig.tsbuildinfo'),
    ]);

    if (!libStaged && !specStaged && !tsBuildInfoStaged) {
        console.info(`\tNo contents staged for ${name}`);
    }
};

await Promise.all(Object.values(Project).map(stageProject));
