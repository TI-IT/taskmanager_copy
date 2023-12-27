module.exports = {
    "env": {
        "browser": true,
        "es6": true
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
    }
}
