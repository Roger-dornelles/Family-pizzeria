module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
  },
    extends: [
      "eslint:recommended",
      "plugin:import/errors",
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:react-hooks/recommended",
      "prettier"
    ],
    rules: {
      
    
    },
    noInlineConfig: true,
    overrides: [
      {
        "files": ["*-test.js","*.spec.js"],
        "rules": {
          "no-unused-expressions": "off"
        }
      }
    ],
    plugins: ["react", "import", "jsx-a11y"],
    "parserOptions": {
      "ecmaVersion": 2021,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    env: {
      "es6": true,
      "browser": true,
      "jest": true,
      "node": true
    },
    settings: {
      "react": {
        "version": "detect"
      }
    }
  
  
};
