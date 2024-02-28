module.exports = {
    env: { browser: true, es2020: true },
    plugins: ["prettier"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "prettier",
    ],
    rules: { "prettier/prettier": "error" },
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
};
