import { type TRPCClientInit, createTRPCClient } from "trpc-sveltekit";

import type { Router } from "$lib/trpc/router";

let browserClient: ReturnType<typeof createTRPCClient<Router>>;

export const trpc = (init?: TRPCClientInit) => {
	if (typeof window === "undefined") return createTRPCClient<Router>({ init });
	if (!browserClient) browserClient = createTRPCClient<Router>();
	return browserClient;
};
