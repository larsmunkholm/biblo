---
sidebar_position: 1
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# 🌱 A basic viewport

<Tabs groupId="language">
<TabItem value="npm" label="TypeScript" default>

```tsx
import {
    bibloImporter,
    BibloProvider,
    BibloIndex,
    BibloReader,
} from "@biblo/react-native";

// Import all files ending in .biblo.ts and .biblo.tsx
const components = bibloImporter(
    require.context(
        "/", // The root path to search in
        true, // Recursive (keep searching in subfolders of the root path)
        /\.biblo\.(ts|tsx)$/, // The files to search for
    )
);

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
```

</TabItem>
<TabItem value="yarn" label="JavaScript">

```jsx
import {
    bibloImporter,
    BibloProvider,
    BibloIndex,
    BibloReader,
} from "@biblo/react-native";

// Import all files ending in .biblo.js and .biblo.jsx
const components = bibloImporter(
    require.context(
        "/", // The root path to search in
        true, // Recursive (keep searching in subfolders of the root path)
        /\.biblo\.(js|jsx)$/, // The files to search for
    )
);

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
```

</TabItem>
</Tabs>
