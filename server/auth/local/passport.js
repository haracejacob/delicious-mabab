import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

async function localAuthenticate(User, email, password, done) {
  const user = await User.find({
    where: {
      email: email.toLowerCase()
    }
  })

  if (!user) {
    return done(null, false, {
      message: 'This email is not registered.'
    })
  }

  try {
    const authenticated = await user.authenticate(password)

    if (!authenticated) {
      return done(null, false, { message: 'This password is not correct.' })
    } else {
      return done(null, user)
    }
  } catch (authError) {
    return done(authError)
  }
}

export function setup(User/*, config*/) {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password' // this is the virtual field on the model
  }, (email, password, done) => localAuthenticate(User, email, password, done)
  ))
}
