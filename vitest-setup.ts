import "@testing-library/jest-dom/vitest";
import { afterAll, afterEach, beforeAll } from "vitest";
import { cleanup } from "@testing-library/react";
import { server } from "@shared/testing/msw-server";
import { useCartStore } from "@entities/cart";
import { useUserStore } from "@entities/user";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());

const initialCartState = useCartStore.getState();
const initialUserState = useUserStore.getState();

afterEach(() => {
  useCartStore.setState(initialCartState, true);
  useUserStore.setState(initialUserState, true);
});
