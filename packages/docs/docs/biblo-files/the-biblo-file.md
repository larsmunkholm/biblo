---
sidebar_position: 1
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# 📂 The Biblo file

Let's say you have a component named **Separator**. _Let's create a **Biblo file** for it!_

<Tabs groupId="language" className="hidden">
<TabItem value="ts" label="TypeScript" default>

Add a file named `Separator.biblo.tsx` with the following content:

</TabItem>
<TabItem value="js" label="JavaScript">

Add a file named `Separator.biblo.jsx` with the following content:

</TabItem>
</Tabs>

<Tabs groupId="language">
<TabItem value="ts" label="TypeScript" default>

```tsx title="Separator.biblo.tsx"
import { BibloBio, BibloItem } from "@biblo/react-native";
import { Separator, SeparatorProps } from "./Separator.component";

export default {
    component: Separator,
    title: "Separator",
} as BibloBio<SeparatorProps>;

export const Horizontal: BibloItem<SeparatorProps> = {};

export const Vertical: BibloItem<SeparatorProps> = {
    props: { vertical: true },
};
```

</TabItem>
<TabItem value="js" label="JavaScript">

```jsx title="Separator.biblo.jsx"
import { Separator, SeparatorProps } from "./Separator.component";

export default {
    component: Separator,
    title: "Separator",
};

export const Horizontal = {};

export const Vertical = {
    props: { vertical: true },
};
```

</TabItem>
</Tabs>

That's basically all you need in a Biblo file.
