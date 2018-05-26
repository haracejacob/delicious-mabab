import _ from 'lodash'

class _User {
  id = ''
  name = ''
  email = ''
  role = ''
}

export default function AuthService($state, $location, $cookies, $q, UserService) {
  let currentUser = new _User()

  if ($cookies.get('token') && $location.path() !== '/logout') {
    currentUser = UserService.me();
  }

  const Auth = {

    login({
      email,
      password,
    }) {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await UserService.login({
            email,
            password
          }).$promise
          $cookies.put('token', res.token)

          const user = await UserService.me().$promise;

          currentUser = user

          resolve(currentUser)
        } catch (err) {
          reject(err.data)
        }
      })
    },

    logout() {
      $cookies.remove('token')
      currentUser = new _User()
    },

    async createUser(user) {
      return new Promise(async (resolve, reject) => {
        try {
          const data = await UserService.save(user).$promise
          $cookies.put('token', data.token)

          const me = await UserService.me().$promise
          currentUser = me
          resolve(currentUser)
        } catch (err) {
          reject(err.data)
        }
      })
    },

    async changePassword(oldPassword, newPassword) {
      return new Promise(async (resolve, reject) => {
        try {
          await UserService.changePassword({
            id: currentUser.id
          }, {
            oldPassword,
            newPassword
          }).$promise

          resolve('done')
        } catch (err) {
          reject(err)
        }
      })
    },

    getCurrentUser() {
      return new Promise(resolve => {
        const value = _.get(currentUser, '$promise') ? currentUser.$promise : currentUser
        $q.when(value).then(user => {
          resolve(user)
        }, () => {
          resolve(new _User())
        })
      })
    },

    isLoggedIn(redirect = false) {
      return new Promise(async resolve => {
        const user = await Auth.getCurrentUser()
        const role = _.get(user, 'role')

        resolve(!!role)

        if (redirect && !!role) {
          $state.go('main')
        }
      })
    },

    hasRole(role, redirect = false) {
      return new Promise(async resolve => {
        const user = await Auth.getCurrentUser()
        const userRole = _.get(user, 'role')

        if (role == 'admin') {
          resolve(true)
        } else {
          const hasRole = role === userRole

          resolve(hasRole)

          if (redirect && !hasRole) {
            $state.go('login')
          }
        }
      })
    },

    getToken() {
      return $cookies.get('token');
    }
  }

  return Auth
}
