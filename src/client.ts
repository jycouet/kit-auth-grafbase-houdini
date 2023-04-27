import { PUBLIC_GRAPHQL_URL } from '$env/static/public';
import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
	url: PUBLIC_GRAPHQL_URL,

	// uncomment this to configure the network call (for things like authentication)
	// for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
	fetchParams({ session }) {
		if (session?.token) {
			return {
				headers: {
					Authorization: `Bearer ${session.token}`
				}
			};
		}
		return {};
	}
});
