module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("students", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey:true
      },
      name: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.TEXT
      }
    },
    { timestamps: false,
        freezeTableName:true
      });
  
    return Student;
  };