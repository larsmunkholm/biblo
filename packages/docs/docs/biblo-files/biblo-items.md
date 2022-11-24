---
sidebar_position: 3
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# 📄 Biblo Items

:::info Note
The **named exports** must be of the type `BibloItem`.
:::

## Props

| Property       | Type                  | Required | Description                                                                                                                       |
|----------------|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------|
| `title`        | string                | ❌        | The title of the state of your component, that you want to show off.                                                              |
| `description`  | string                | ❌        | A description.                                                                                                                    |
| `props`        | {}                    | ❌        | An object defining a set of props to apply to your component.                                                                     |
| `wrapper`      | React.ElementType     | ❌        | Sometimes it's helpful to have your component wrapped in another component.                                                       |
| `wrapperStyle` | StyleProp<ViewStyle\> | ❌        | Sometimes it's helpful to just add some styling to the `View` (or another component) that your component is being wrapped inside. |

## Examples

### Simplest

This is the simplest way to export an example of your component.

<Tabs groupId="language">
<TabItem value="npm" label="TypeScript" default>

```tsx title="Separator.biblo.tsx"
export const Default: BibloItem<SeparatorProps> = {};
```

</TabItem>
<TabItem value="yarn" label="JavaScript">

```jsx title="Separator.biblo.jsx"
export const Default = {};
```

</TabItem>
</Tabs>

The title of the example will be **Default** and it will have no description, no props, no wrapper, no nothing.

### Still simple

Here we'll give it a bit more something something.

<Tabs groupId="language">
<TabItem value="npm" label="TypeScript" default>

```tsx title="Separator.biblo.tsx"
export const Vertical: BibloItem<SeparatorProps> = {
    title: "A vertical separator",
    description: "This is the Separator component in its vertical state.",
    props: {
        vertical: true,
    },
    wrapperStyle: {
        padding: 10,
    },
};
```

</TabItem>
<TabItem value="yarn" label="JavaScript">

```jsx title="Separator.biblo.jsx"
export const Vertical = {
    title: "A vertical separator",
    description: "This is the Separator component in its vertical state.",
    props: {
        vertical: true,
    },
    wrapperStyle: {
        padding: 10,
    },
};
```

</TabItem>
</Tabs>

### Advanced

In case you need to use hooks or some other JavaScript logic - we got your back.

<Tabs groupId="language">
<TabItem value="npm" label="TypeScript" default>

```tsx title="Separator.biblo.tsx"
export const BrandColored: BibloItem<SeparatorProps> = (props) => {
    const { palette } = useTheme();
    return <Separator {...props} color={palette.brandColor} />;
};
BrandColored.title = "Colored (brand)";
BrandColored.description = "This is the Separator component in our brand color.";
BrandColored.props = {
    margin: true,
    style: "dashed",
};
```

</TabItem>
<TabItem value="yarn" label="JavaScript">

```jsx title="Separator.biblo.jsx"
export const BrandColored = (props) => {
    const { palette } = useTheme();
    return <Separator {...props} color={palette.brandColor} />;
};
BrandColored.title = "Colored (brand)";
BrandColored.description = "This is the Separator component in our brand color.";
BrandColored.props = {
    margin: true,
    style: "dashed",
};
```

</TabItem>
</Tabs>
