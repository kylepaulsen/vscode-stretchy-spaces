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

  // For which languages indent-rainbow should be activated (if empty it means all).
  "stretchySpaces.includedLanguages": [] // for example ["nim", "nims", "python"]

  // For which languages indent-rainbow should be deactivated (if empty it means none).
  "stretchySpaces.excludedLanguages": [] // for example ["plaintext"]

  // The delay in ms until the editor gets updated.
  "stretchySpaces.updateDelay": 100 // 10 makes it super fast but may cost more resources
```

*Notice: Defining both `includedLanguages` and `excludedLanguages` does not make much sense. Use one of both!*

## Commands

Get to the Command Palette and then you can run:

`Stretchy Spaces: Disable` - to disable the extension within the current running vscode instance.

`Stretchy Spaces: Enable` - to enable the extension within the current running vscode instance.


## Other Info

This extension borrows code from the [Indent Rainbow](https://github.com/oderwat/vscode-indent-rainbow) extension, which I highly recommend!

Licensed under MIT
