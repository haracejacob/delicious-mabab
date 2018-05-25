export default function UserService($resource) {
  'ngInject'

  const UserResource = $resource('/api/user/:id', {
    _id: '@id',
    name: '@name',
    email: '@email',
    role: '@role',
    password: '@password',
    salt: '@salt'
  }, {
    me: {
      method: 'GET',
      url: '/api/user/me'
    },
    changePassword: {
      method: 'PUT',
      url: '/api/user/:id/password',
    },
    login: {
      method: 'POST',
      url: '/auth/local'
    }
  })

  return UserResource
}
