import { sequence } from '@sveltejs/kit/hooks';
import { handleAuth } from './hooks/handleAuth';

export const handle = sequence(
	// Auth management
	handleAuth
);
