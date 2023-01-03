import { initTRPC } from "@trpc/server";
import delay from "delay";

import type { Context } from "$lib/trpc/context";

export const t = initTRPC.context<Context>().create();

export const router = t.router({
	greeting: t.procedure.query(async () => {
		await delay(500);
		return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`;
	})
});

export type Router = typeof router;
