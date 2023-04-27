import { PUBLIC_GRAPHQL_PROXY } from '$env/static/public';
import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
	// url: 'http://127.0.0.1:4000/graphql',
	url: PUBLIC_GRAPHQL_PROXY,

	// uncomment this to configure the network call (for things like authentication)
	// for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
	fetchParams({ session }) {
		if (session?.token) {
			return {
				headers: {
					Authentication: `Bearer ${session.token}`
				}
			};
		}
		return {};
	}
});
