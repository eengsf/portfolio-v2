"use client";

import Pages from "@/components/Pages";
import { Provider } from "react-redux";
import store from "@/store";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Pages />
      </Provider>
    </>
  );
}
