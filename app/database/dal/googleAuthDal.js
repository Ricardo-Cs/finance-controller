const User = require("../models/user");

const googleAuthDal = {
    registerWithGoogle: async (oauthUser) => {
        try {
            const [user, created] = await User.findOrCreate({
                where: {
                    email: oauthUser.emails[0].value,
                },
                defaults: {
                    name: oauthUser.displayName,
                    googleId: oauthUser.id,
                },
            });

            if (created) {
                console.log('Usuário cadastrado.');
            } else {
                console.log('Usuário já cadastrado. Logando...');
            }

            return { success: { user } };
        } catch (error) {
            console.error('Error registering with Google:', error);
            return { failure: { message: 'Error registering with Google.' } };
        }
    },
};


module.exports = googleAuthDal;