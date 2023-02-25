import { sequelizedb } from "../db/database";
import {DataTypes} from "sequelize";
import bcrypt from "bcrypt"
import Profile from "./profilemodels/profile";
const USER = sequelizedb.define('user', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue:"Buyer"
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value: string) {
      // this function is to hash the password before saving it.
      this.setDataValue(
        'password',
        bcrypt.hashSync(value, bcrypt.genSaltSync()),
      )
    },
  },
})
USER.sync()

USER.hasOne(Profile, { foreignKey: 'userId', as: 'profile' });
Profile.belongsTo(Profile, { foreignKey: 'userId' });
export default USER 
