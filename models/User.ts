import { Model, DataTypes } from "https://deno.land/x/denodb@v1.4.0/mod.ts";

export class User extends Model {
  static table = 'users';
  static timestamps = true;

  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      length: 100,
      unique: true,
    },

    password: DataTypes.STRING,

    preferedTheme: {
      type: DataTypes.ENUM,
      values: ['light', 'dark'],
      defaultValue: 'dark',
    },
  };
}
