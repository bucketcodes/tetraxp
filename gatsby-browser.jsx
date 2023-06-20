import React from "react";
import Layout from "./src/components/Layout";
import '@fontsource-variable/inter';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
