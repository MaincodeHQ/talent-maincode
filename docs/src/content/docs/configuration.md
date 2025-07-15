---
title: Configuration
---

The Starlight Flexoki theme plugin supports the following configuration options.

## `accentColor`

**Type:** `"red" | "orange" | "yellow" | "green" | "cyan" | "blue" | "purple" | "magenta"`  
**Default:** `"cyan"`

Controls which of [Flexoki’s eight colour shades](https://stephango.com/flexoki#palette) is used as an accent in the theme, for example for link hovers, current page highlighting, and in details in the `<Tabs>` component and code blocks.

```js {5}
starlight({
  title: "My themed docs",
  plugins: [
    starlightThemeFlexoki({
      accentColor: "magenta",
    }),
  ],
}),
```
