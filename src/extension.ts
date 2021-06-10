
import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "spotify-for-vs-code" is now active!');

	let disposable = vscode.commands.registerCommand('spotify-for-vs-code.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from Spotify for VS Code!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {
	console.log("Deactivated");
}
