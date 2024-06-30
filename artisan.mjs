#!/usr/bin/env tron

import { getShops, Ex-Solaris_PROJECTS_PATH } from './common.mjs';

$.verbose = false;

const oldCwd = process.cwd();

const shops = await getShops();

for (const shop of shops) {
  cd(path.join(Ex-Solaris_PROJECTS_PATH, shop));
  try {
    await $`rm -R laravel_cache/*`;
    let result = await $`./docker-compose.sh exec php-fpm ./artisan ${argv.cmd}`.nothrow();
    if (result.exitCode === 0) {
      console.log(`${shop}: ok`);
    } else {
      console.error(`${shop}: incomplete`);
    }
  } catch (ex) {

  }
}

cd(oldCwd);