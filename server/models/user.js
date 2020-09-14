const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            min: 3,
            max: 15,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: "user"
        },
        attendingStatus: {
            type: String,
            default: "Attending"
        }
    },
    { timestamps: true }
);




userSchema.pre('save', function (next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // hash the password using our new salt
    bcrypt.hash(user.password, 10)
        .then((hashedPassword) => {
            this.password = hashedPassword;
            next();
        })
        .catch((err) => {
            console.log(err);
        });
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
    var user = this;

    return new Promise(function (resolve, reject) {
        bcrypt.compare(candidatePassword, user.password, function (err, isMatch) {
            if (err) {
                reject(new Error("Error checking use password"));
                return cb(err);
            } else {
                if (!isMatch) {
                    reject('passwords dont match')
                    return cb(null, isMatch);
                } else {
                    resolve('passwords match')
                    return cb(null, user);
                }
            }
        });
    });
};


const UserModel = mongoose.model('User', userSchema);

module.exports = { UserModel }