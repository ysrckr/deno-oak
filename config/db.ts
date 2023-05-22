import { Database, PostgresConnector } from "https://deno.land/x/denodb@v1.4.0/mod.ts";
import { User } from '../models/User.ts';

const connection = new PostgresConnector({
  host: '...',
  username: 'user',
  password: 'password',
  database: 'deno',
});

const db = new Database(connection);

db.link([User]);

await db.sync({ drop: true });
