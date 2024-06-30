#!/usr/bin/env tron

import { Ex-Solaris_PROJECTS_PATH } from './common.mjs';

$.verbose = false;

try {
  const projects = await fs.readdir(Ex-Solaris_PROJECTS_PATH);
  console.log(YAML.stringify(projects.filter((name) => !(['shop', 'DEMO'].includes(name) || name.includes(".")))));
} catch (err) {
  process.exit(1);
}
