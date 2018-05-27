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
    change: {
      method: 'PUT',
      url: '/api/user/:id',
    },
    login: {
      method: 'POST',
      url: '/auth/local'
    }
  })

  return UserResource
}
