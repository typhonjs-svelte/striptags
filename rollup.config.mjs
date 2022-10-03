import dts        from "rollup-plugin-dts";
import typescript from "@rollup/plugin-typescript";

export default [
    {
        input: "src/striptags.ts",
        output: [
            {
                format: "es",
                dir: "dist/es6",
            },
        ],
        plugins: [
            typescript({ declaration: true, declarationDir: "dist/es6", outDir: "dist/es6" }),
        ],
    },
    {
        input: "src/striptags.ts",
        output: [
            {
                format: "cjs",
                dir: "dist/cjs",
            },
        ],
        plugins: [typescript()],
    },
    {
        input: "dist/es6/striptags.d.ts",
        output: [
            {
                format: "es",
                file: "./types/index.d.ts",
            },
        ],
        plugins: [
            dts()
        ],
    },
];
