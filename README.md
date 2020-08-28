# Stretchy Spaces

Allows you to change how wide your indentation spaces are.

![Example](https://raw.githubusercontent.com/kylepaulsen/vscode-stretchy-spaces/master/pic.png)

## Features

Do you hate your project's indentation level and have a hard time reading your code? Then just
stretch it to be what you want! You can expand or contract your indentation using this extension.

Note: This only works on files that are indented using spaces. If a file is indented using tabs, vscode can already change your tab size! It's built into the editor!

## Configuration

Although you can just use it as it is there is the possibility to configure some aspects of the extension:

```
  // How many spaces do you wish the indentation was? The extension will *try* to match this.
  "stretchySpaces.targetIndentation": 4

  // For which languages Stretchy Spaces should be activated (if empty it means all).
  "stretchySpaces.includedLanguages": [] // for example ["nim", "nims", "python"]

  // For which languages Stretchy Spaces should be deactivated (if empty it means none).
  "stretchySpaces.excludedLanguages": [] // for example ["plaintext"]

  // Try to align asterisks in the same column to preserve JSDoc-style comment alignment.
  "stretchySpaces.alignAsterisks": true

  // The delay in ms until the editor gets updated.
  "stretchySpaces.updateDelay": 100 // 10 makes it super fast but may cost more resources
```

*Notice: Adding the same language to both `includedLanguages` and `excludedLanguages` does not make much sense. Use one or the other, not both!*

## Commands

Get to the Command Palette and then you can run:

`Stretchy Spaces: Disable` - to disable the extension within the current running vscode instance.

`Stretchy Spaces: Enable` - to enable the extension within the current running vscode instance.

## Guides

If you have indent guides enabled, they will still appear at the unadjusted locations. Either disable them:

```js
"editor.renderIndentGuides": false
```

Or install the [Guides](https://marketplace.visualstudio.com/itemdetails?itemName=spywhere.guides) extension to replace them with ones that are compatible with this extension.

## Other Info

This extension borrows code from the [Indent Rainbow](https://github.com/oderwat/vscode-indent-rainbow) extension, which I highly recommend!

Licensed under MIT
