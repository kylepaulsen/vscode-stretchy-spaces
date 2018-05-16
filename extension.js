// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
// this method is called when vs code is activated
function activate(context) {
    // Create a decorator types that we use to decorate indent levels
    let timeout = null;
    let currentLanguageId = null;
    let activeEditor = vscode.window.activeTextEditor;

    let currentIndentDecorationType;

    if (activeEditor && checkLanguage()) {
        triggerUpdateDecorations();
    }

    vscode.window.onDidChangeTextEditorOptions(function(event) {
        const options = event.options;
        const indentChange = options && (options.insertSpaces !== undefined || options.tabSize !== undefined);
        if (indentChange && checkLanguage()) {
            clearDecorations();
            triggerUpdateDecorations();
        }
    }, null, context.subscriptions);

    vscode.window.onDidChangeActiveTextEditor(function(editor) {
        activeEditor = editor;
        if (editor && checkLanguage()) {
            clearDecorations();
            triggerUpdateDecorations();
        }
    }, null, context.subscriptions);

    vscode.workspace.onDidChangeTextDocument(function(event) {
        if (activeEditor && event.document === activeEditor.document && checkLanguage()) {
            triggerUpdateDecorations();
        }
    }, null, context.subscriptions);

    function checkLanguage() {
        if (activeEditor) {
            if (currentLanguageId !== activeEditor.document.languageId) {
                const inclang = vscode.workspace.getConfiguration('stretchySpaces').includedLanguages || [];
                const exclang = vscode.workspace.getConfiguration('stretchySpaces').excludedLanguages || [];
                currentLanguageId = activeEditor.document.languageId;
                if (inclang.length !== 0) {
                    if (inclang.indexOf(currentLanguageId) === -1) {
                        return false;
                    }
                }
                if (exclang.length !== 0) {
                    if (exclang.indexOf(currentLanguageId) !== -1) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    function clearDecorations() {
        if (currentIndentDecorationType) {
            activeEditor.setDecorations(currentIndentDecorationType, []);
            currentIndentDecorationType = null;
        }
    }

    function triggerUpdateDecorations() {
        if (timeout) {
            clearTimeout(timeout);
        }
        const updateDelay = vscode.workspace.getConfiguration('stretchySpaces').updateDelay || 100;
        timeout = setTimeout(updateDecorations, updateDelay);
    }

    function updateDecorations() {
        const targetIndentation = vscode.workspace.getConfiguration('stretchySpaces').targetIndentation;
        const indentFactor = targetIndentation / activeEditor.options.tabSize;
        if (!activeEditor || !activeEditor.options.insertSpaces || indentFactor === 1) {
            return;
        }
        const decorationRanges = [];
        const regEx = /^ +/gm;
        const text = activeEditor.document.getText();

        if (!currentIndentDecorationType) {
            currentIndentDecorationType = vscode.window.createTextEditorDecorationType({
                letterSpacing: 8 * indentFactor - 8 + 'px'
            });
        }

        let match;

        while (match = regEx.exec(text)) {
            const matchText = match[0];
            const matchLength = matchText.length;
            const startPos = activeEditor.document.positionAt(match.index);
            const endPos = activeEditor.document.positionAt(match.index + matchLength);
            decorationRanges.push({ range: new vscode.Range(startPos, endPos), hoverMessage: null });
        }
        activeEditor.setDecorations(currentIndentDecorationType, decorationRanges);
    }
}

exports.activate = activate;
