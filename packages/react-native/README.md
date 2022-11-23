<div align="center">

# 📚 Biblo for React Native

A fully customizable **component library** and workshop living in your **React Native** app.

[![js-prettier-style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge)](https://prettier.io/)
[![Compatibility](https://img.shields.io/badge/platform-android%20%7C%20ios%20%7C%20Web%20%7C%20expo-blue.svg?style=for-the-badge)](http://npmjs.org/package/@biblo/react-native)

[![Built with](https://skills.thijs.gg/icons?i=react,ts&theme=dark)](https://github.com/larsmunkholm/biblo)

</div>

## 📘 Description

#### What is this?

Biblo helps you create your very own "library" of components. It is basically a list of all the components you have developed for your app, each with a list of examples of the component with different properties.

Biblo was inspired by **StoryBook**, and the easily manageable workflow it provides in creating a component library. So if that is something you know and love, you might also like this.

However, since Biblo is meant to exist inside your app (and not as a separate thing like StoryBook), you have the possibility to 💅 style every part of it or even exchange most of the parts with your own components, truly making it a part of your app.

#### How does it work?

Using `require.context`, it is possible import to all the exports from a bunch of files using a regular expression.

Just like with StoryBook, these files (usually ending in `.biblo.tsx`) must be set up with a **default export** containing the basic information about the component and a number of **named exports** all representing different versions of the component (different properties).

## 🚀 Try it out

You can run an example by performing these steps:

```
git clone git@github.com:larsmunkholm/biblo.git
cd biblo
cd example
npm install
npm run android
```

## 💾 Installation

> **Note**
> This package requires that you use **Metro version 0.72.1** or newer.

📦 Using **npm**

```
npm install --save @biblo/react-native @biblo/babel-plugin
```

🧶 Using **Yarn**

```
yarn add @biblo/react-native @biblo/babel-plugin
```

The solution is implemented in JavaScript so no native module linking is required.

### 🅱️ Babel

To enable Biblo to list your examples in the same order you export them, add `"@biblo/babel-plugin"` as a plugin in your **babel.config.js** file:

```js
module.exports = {
    plugins: ["@biblo/babel-plugin"],
};
```

### Ⓜ️ Metro

Biblo uses `require.context` to import all files that end in `.biblo.tsx`, `.biblo.jsx` or whatever you choose.

> **Note**
> If you're using **Expo** you can skip this step as they have already enabled `unstable_allowRequireContext`

**Example 1:**

```js
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);
config.transformer.unstable_allowRequireContext = true;
```

**Example 2:**

```js
module.exports = (async () => {
    return {
        transformer: {
            unstable_allowRequireContext: true, // Biblo needs this
        },
    };
})();
```

This is supported since [version **0.72.1** of Metro](https://github.com/facebook/metro/releases/tag/v0.72.1).

### 🎯 TypeScript

Using `require.context` is still experimental in Metro, so they haven't added it to their TypeScript declaration.

Luckily, you can fix that by including `"@biblo/react-native"` in your **tsconfig.json** file.

```json
{
  "compilerOptions": { },
  "include": ["@biblo/react-native"]
}
```

## 🛠 Usage

#### A basic viewport

Lets's start by importing all the stuff we need:

```tsx
import {
    bibloImporter,
    BibloProvider,
    BibloIndex,
    BibloReader,
} from "@biblo/react-native";
```

Now we need to import our component examples:

```tsx
// Import all files ending in .biblo.js, .biblo.ts, .biblo.jsx and .biblo.tsx
// You might want to be more specific than this
const components = bibloImporter(
    require.context(
        "/", // The root path to search in
        true, // Recursive (keep searching in subfolders of the root path)
        /\.biblo\.(tsx|jsx|ts|js)$/, // The files to search for
    )
);
```

Set up the app:

```tsx
export default function App() {
    return (
        <BibloProvider components={components}>
            <View style={{ height: "50%" }}>
                <BibloIndex />
            </View>
            <View style={{ height: "50%" }}>
                <BibloReader />
            </View>
        </BibloProvider>
    );
}
````

#### A basic component example

Imagine you have a component named **Separator**. It's file may be named `Separator.component.tsx`

_Let's create a Biblo example for it!_

Add a file named `Separator.biblo.tsx` with the following content:

```tsx
import { BibloBio, BibloBook } from "@biblo/react-native";
import { Separator, SeparatorProps } from "./Separator.component";

export default {
    title: "Separator",
    description: "A line separating two different types of content.",
    tags: ["graphics"],
    component: Separator,
} as BibloBio<SeparatorProps>;

// The component in its default form
export const Horizontal: BibloBook<SeparatorProps> = {};

// With props
export const Vertical: BibloBook<SeparatorProps> = {
    props: { vertical: true },
};

// With props, a title and a description
export const MarginTop: BibloBook<SeparatorProps> = {
    title: "With top margin",
    description: "You might need a little buffer up top.",
    props: { marginTop: true },
};

// In case you need more freedom
export const BrandColored: BibloBook<SeparatorProps> = (props) => {
    const { palette } = useTheme();
    return <Separator {...props} color={palette.brandColor} />;
};
BrandColored.title = "Colored (brand)";
BrandColored.props = {
    margin: true,
    style: "dashed",
};
```
