const { DataTypes } = require("sequelize");
const sequelize = require("../../services/mysql/sequelize");
const User = require("../user/model");
const Book = require("../book/model");

const Reservation = sequelize.define(
  "reservation",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    id_user: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
        as: "User",
        onDelete: "cascade",
        onUpdate: "cascade",
      },
    },

    id_book: {
      type: DataTypes.INTEGER,
      references: {
        model: "book",
        key: "id",
        as: "Book",
        onDelete: "cascade",
        onUpdate: "cascade",
      },
    },
    
    final_date:{
      type:DataTypes.STRING,
      allowNull:false
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

User.hasMany(Reservation,{foreignKey:"id_user"});
Reservation.belongsTo(User,{foreignKey:"id_user"});

Book.hasMany(Reservation,{foreignKey:"id_book"});
Reservation.belongsTo(Book,{foreignKey:"id_book"});

module.exports = Reservation;
