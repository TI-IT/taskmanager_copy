module.exports = {
    "env": {
        browser: true,
        es6: true // or "es2021" for enabling ECMAScript 2021 features.
    },
    "extends": "htmlacademy/es6",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
    },
    ignorePatterns: ['*.css', '*.woff', '*.woff2', '*.html', '*.md'],
}
