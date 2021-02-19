const IGNORE_FILES = [
  "../dist/**",
];

//自動修正
const AutoFixable = {
  indentation: 2,
  "no-extra-semicolons": true,
  "shorthand-property-no-redundant-values": true,
  "selector-max-empty-lines": 0,
  "color-hex-case": "lower",
  "color-hex-length": "short",
  "number-leading-zero": "never",
  "number-no-trailing-zeros": true,
  "string-quotes": "single",
  "length-zero-no-unit": [true, {
    ignore: ["custom-properties"]
  }],
  "unit-case": "lower",
  "value-keyword-case": "lower",
  "property-case": "lower",
  "selector-pseudo-class-case": "lower",
  "selector-pseudo-element-case": "lower",
  "selector-type-case": "lower",
};

module.exports = {
  plugins: [
    "stylelint-high-performance-animation"
  ],
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-recess-order"
  ],
  rules: {
    ...AutoFixable,
    "plugin/no-low-performance-animation-properties": [true, {
      ignoreProperties: [
        'height',
        'fill',
        'color',
        'visibility',
        'box-shadow',
        'margin-top',
        'background-color',
        'background-position'
      ]
    }],
    "at-rule-no-unknown": [true, {
      ignoreAtRules: [
        "tailwind",
        "screen",
        "responsive"
      ]
    }],
    "selector-type-no-unknown": [true, {
      ignoreTypes: ["_"],
    }],
    "color-no-invalid-hex": [true, {
      message: "hexが無効の数値です"
    }],
    "function-calc-no-invalid": [true, {
      message: "calc関数が無効な式です。"
    }],
    "string-no-newline": [true, {
      message: "文字列の改行をエスケープしてください。"
    }],
    "unit-no-unknown": [true, {
      message: "CSS仕様で定義されている単位ではありません。"
    }],
    "property-no-unknown": [true, {
      ignoreSelectors: [":root"],
      message: "CSS仕様で定義されているプロパティではありません。。"
    }],
    "declaration-block-no-duplicate-properties": [true, {
      message: "プロパティが重複しています。"
    }],
    "selector-pseudo-class-no-unknown": [true, {
      message: "存在しない疑似クラスです。"
    }],
    "selector-pseudo-element-no-unknown": [true, {
      message: "存在しない擬似要素です。"
    }],
    "selector-max-type": [1, {
      message: "classを付けてください。"
    }],
    "declaration-no-important": [true, {
      message: "importantは使用禁止です。"
    }],
    "selector-max-id": [0, {
      message: "IDは使用禁止です。"
    }],
    "max-nesting-depth": [3, {
      ignore: ["pseudo-classes"],
      ignoreAtRules: [/include/, /media/],
      message: "ネストが深すぎます。"
    }],
    "no-descending-specificity": null,
    "no-empty-source": null,
    "block-no-empty": null
  },
  ignoreFiles: IGNORE_FILES
};