import typescript       from "@rollup/plugin-typescript";
import { generateDTS }  from "@typhonjs-build-test/esm-d-ts";

export default [
    {
        input: "src/striptags.ts",
        output: [
            {
                file: "dist/es6/striptags.js",
                format: "es",
                generatedCode: { constBindings: true },
            },
        ],
        plugins: [
           generateDTS.plugin({ output: './types/index.d.ts' }),
           typescript(),
        ],
    },
    {
        input: "src/striptags.ts",
        output: [
            {
                file: "dist/cjs/striptags.js",
                format: "cjs"
            },
        ],
        plugins: [typescript()],
    }
];
