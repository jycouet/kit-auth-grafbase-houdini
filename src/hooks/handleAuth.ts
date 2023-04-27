import { AUTH_GITHUB_ID, AUTH_GITHUB_SECRET, AUTH_SECRET } from '$env/static/private';
import { setSession } from '$houdini';
import type { JWT } from '@auth/core/jwt';
import GitHub from '@auth/core/providers/github';
import { SvelteKitAuth } from '@auth/sveltekit';
import type { Handle } from '@sveltejs/kit';
import jsonwebtoken from 'jsonwebtoken';

export const handleAuth = (async ({ event, resolve }) => {
	return SvelteKitAuth({
		secret: AUTH_SECRET,
		// @ts-ignore
		providers: [GitHub({ clientId: AUTH_GITHUB_ID, clientSecret: AUTH_GITHUB_SECRET })],
		jwt: {
			encode: ({ secret, token }) => {
				const encodedToken = jsonwebtoken.sign(
					{
						...token,
						iss: process.env.ISSUER_URL,
						exp: Math.floor(Date.now() / 1000) + 60 * 60
					},
					secret
				);
				return encodedToken;
			},
			decode: async ({ secret, token }) => {
				const decodedToken = jsonwebtoken.verify(token!, secret);

				// Provide the token to Houdini
				setSession(event, { token });

				return decodedToken as JWT;
			}
		}
	})({ event, resolve });
}) satisfies Handle;
