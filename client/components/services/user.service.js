export default function UserService($resource) {
  'ngInject'

  const UserResource = $resource('/api/user/:id', {
    id: '@id'
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
