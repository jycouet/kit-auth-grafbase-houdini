# kit-auth-grafbase-houdini

1. `pnpm i`
2. create `.env` from `.env.example` following comments in the file.
3. `pnpm dev` to start
4. GraphiQL: http://127.0.0.1:4000 and site: http://localhost:5173
5. Add todos in GraphiQL:

```gql
mutation Add {
	a: todoCreate(input: { title: "Project cloned", complete: true }) {
		todo {
			id
			title
		}
	}
	b: todoCreate(input: { title: "List visible", complete: false }) {
		todo {
			id
			title
		}
	}
}
```
