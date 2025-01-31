#!/usr/bin/env tron

import { Ex-Solaris_PROJECTS_PATH, getShops } from './common.mjs';

$.verbose = false;

const oldCwd = process.cwd();

const shops = await getShops();

for (const shop of shops) {
  cd(path.join(Ex-Solaris_PROJECTS_PATH, shop));

  const result = await $`./docker-compose.sh down`.nothrow();
  if (result.exitCode === 0) {
    console.log(`${shop}: ok`);
  } else {
    console.error(`${shop}: incomplete`);
  }
}

cd(oldCwd);
