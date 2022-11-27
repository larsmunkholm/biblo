# Biblo addon simple markup

Biblo addon for parsing simple markup.

#### Bold text

`"Lorem **bold** ipsum"` ➡️ Lorem **bold** ipsum

#### Italic text

`"Lorem _italic_ ipsum"` ➡️ Lorem _italic_ ipsum

## Installation

```shell
# npm
npm install @biblo/addon-simple-markup --save

# Yarn
yarn add @biblo/addon-simple-markup
```

## Initialization

Import the addon and add it to `BibloProvider`:

```tsx
import React from "react";
import {
    bibloImporter,
    BibloProvider,
} from "@biblo/react-native";

// Import the addon
import BibloAddonSimpleMarkup from "@biblo/addon-simple-markup";

const components = bibloImporter(
    require.context("/", true, /\.biblo\.[tj]sx?$/),
);

export default function App() {
    return (
        <BibloProvider
            // Apply the addon
            addons={[BibloAddonSimpleMarkup]}
            components={components}
        >
            ...
        </BibloProvider>
    );
}
```

## Options

The default markup is set with `**` for **bold** and `_` for _italic_.

This can be changed by passing an object to `BibloAddonSimpleMarkup`:

```tsx {2}
<BibloProvider
    addons={[BibloAddonSimpleMarkup({ bold: "*", italic: "__" }]}
    components={components}
>
    ...
</BibloProvider>
```
