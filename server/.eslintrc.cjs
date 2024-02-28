module.exports = {
    root: true,
    extends: ["../.eslintrc.cjs"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
    },
};
