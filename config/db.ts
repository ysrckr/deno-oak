import { dso } from 'https://deno.land/x/dso@v1.0.0/mod.ts';

await dso.connect({
  hostname: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '',
  db: 'dbname',
});

await dso.sync(false);
