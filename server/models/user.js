
module.exports = (sequelize,DataTypes) => {
    let User = sequelize.define('User',{
        email : DataTypes.STRING
    });

    User.associate = function(models) {
        User.hasMany(models.Post,{
            foreignKey : 'userId',
            as : 'posts'
        });
    };
    return User;
}