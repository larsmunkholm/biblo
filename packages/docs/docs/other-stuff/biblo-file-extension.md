---
sidebar_position: 1
---

# 📝 Biblo file extension

By default, Biblo files end in one of the following extensions:
- `.biblo.tsx`
- `.biblo.jsx`
- `.biblo.ts`
- `.biblo.js`

If you wish to change that, here's how to do it:

## 📦 Importing files

This will import all files ending in `.customExtension.*`

```jsx
const components = bibloImporter(
    require.context(
        "/", // The root path to search in
        true, // Recursive (keep searching in subfolders of the root path)
        // highlight-next-line
        /\.customExtension\.[tj]sx?$/, // The files to search for
    )
);
```

## 🅱️ Babel

Biblo uses Babel to list your examples in the same order you export them, but Babel needs to know how your files are named.

```js {3-8} title="babel.config.js"
module.exports = {
    plugins: [
        [
            "@biblo/babel-plugin",
            {
                regex: /\.customExtension\.[tj]sx?$/,
            },
        ],
    ],
};
```

## ✨ Regular expression

:::info Note
The regex `/\.customExtension\.[tj]sx?$/` will match all files ending in the following extensions:
- `.customExtension.tsx`
- `.customExtension.jsx`
- `.customExtension.ts`
- `.customExtension.js`
:::
