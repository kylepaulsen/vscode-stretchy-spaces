# Strechy Spaces

Allows you to change how wide your spaces are.

## Features

Do you hate your project's indentation level and have a hard time reading your code? Then just
stretch it to be what you want! You can expand or contract your indentation using this extension.

Note: This only works on files that are indented using spaces. If a file is indented using tabs, vscode can already change your tab size! It's built into the editor!

### Configuration

Although you can just use it as it is there is the possibility to configure some aspects of the extension:

```
// How many spaces do you wish the indentation was? The extension will *try* to match this.
"strechySpaces.targetIndentation": 4

// For which languages indent-rainbow should be activated (if empty it means all).
"strechySpaces.includedLanguages": [] // for example ["nim", "nims", "python"]

// For which languages indent-rainbow should be deactivated (if empty it means none).
"strechySpaces.excludedLanguages": [] // for example ["plaintext"]

// The delay in ms until the editor gets updated.
"strechySpaces.updateDelay": 100 // 10 makes it super fast but may cost more resources
```

*Notice: Defining both `includedLanguages` and `excludedLanguages` does not make much sense. Use one of both!*

Licensed under MIT
