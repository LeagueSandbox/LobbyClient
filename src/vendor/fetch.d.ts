// Type definitions for fetch API
// Spec: https://fetch.spec.whatwg.org/
// Polyfill: https://github.com/github/fetch
// Definitions by: Ryan Graham <https://github.com/ryan-codingintrigue>

// Uses bluebird for promises.
/// <reference path="bluebird.d.ts" />

interface FetchOptions {
	method?: string;
	headers?: any;
	body?: any;
    mode?: string;
}

declare enum ResponseType {
	Basic,
	Cors,
	Default,
	Error,
	Opaque
}

interface Headers {
	append(name: string, value: string):void;
	delete(name: string):void;
	get(name: string): string;
	getAll(name: string): Array<string>;
	has(name: string): boolean;
	set(name: string, value: string): void;
}

interface Body {
	bodyUsed: boolean;
	arrayBuffer(): Promise<ArrayBuffer>;
	blob(): Promise<Blob>;
	formData(): Promise<FormData>;
	json(): Promise<JSON>;
	text(): Promise<string>;
}

interface Response extends Body {
	error(): Response;
	redirect(url: string, status?: number): Response;
	type: ResponseType;
	url: string;
	status: number;
	ok: boolean;
	statusText: string;
	headers: Headers;
	clone(): Response;
}

interface Window {
	fetch(url: string): Promise<Response>;
	fetch(url: string, options: FetchOptions): Promise<Response>;
}