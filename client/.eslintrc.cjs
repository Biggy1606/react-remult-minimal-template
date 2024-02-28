module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: ["../.eslintrc.cjs", "plugin:react-hooks/recommended"],
    plugins: ["react-refresh"],
    rules: {
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json", "./tsconfig.node.json"],
        tsconfigRootDir: __dirname,
    },
};
