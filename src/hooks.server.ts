import { GRAPHQL_URL } from '$env/static/private';
import { PUBLIC_GRAPHQL_PROXY } from '$env/static/public';
import { sequence } from '@sveltejs/kit/hooks';
import { handleAuth } from './hooks/handleAuth';
import { handleProxies } from './hooks/handleProxies';

export const handle = sequence(
	// Proxy requests through kit
	handleProxies({ proxies: [{ from: PUBLIC_GRAPHQL_PROXY, to: GRAPHQL_URL }] }),

	// Auth management
	handleAuth
);
