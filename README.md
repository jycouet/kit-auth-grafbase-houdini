# kit-auth-grafbase-houdini

1. `pnpm i`
2. create `.env` from `.env.example` following comments in the file.
3. `pnpm dev` to start
4. GraphiQL: http://127.0.0.1:4000 and site: http://127.0.0.1:5173
5. Add todos in GraphiQL:

```gql
mutation Add {
	a: pricingCreate(input: { title: "Free", value: 0 }) {
		pricing {
			id
			title
		}
	}
	b: pricingCreate(input: { title: "Individual", value: 25 }) {
		pricing {
			id
			title
		}
	}
	c: pricingCreate(input: { title: "Enterprise", value: 5000 }) {
		pricing {
			id
			title
		}
	}
	d: kPICreate(input: { title: "Number of KM by bike per week", target: 300 }) {
		kPI {
			id
			title
		}
	}
	e: kPICreate(input: { title: "Less coffee per day! (max x)", target: 3 }) {
		kPI {
			id
			title
		}
	}
}
```
