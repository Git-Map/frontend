module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
      "process":false,
      "it":false,
      "expect":false,
      "describe":false,
      "require": false
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": [
          "off"
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error"
    }
};
