export type Project = 'foo';

export const Project: { [key in Project]: ProjectMetadata } = {
    foo: {
        directory: 'packages/foo',
        dockerNamespace: 'eyebraus.foo',
        name: 'foo',
        packageName: '@eyebraus/foo',
    },
};

export type ProjectMetadata = {
    directory: string;
    dockerNamespace: string;
    name: Project;
    packageName: string;
};

export const isProject = (value: string): value is Project => {
    switch (value) {
        case 'foo':
            return true;

        default:
            return false;
    }
};
