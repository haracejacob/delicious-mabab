export default function MenuService($resource) {
  'ngInject'

  const MenuResource = $resource('/api/menu/:id', {
    id: '@id',
  }, {
    indexByCategory: {
      method: 'GET',
      url: '/api/menu/category/:categoryId'
    },
  })

  return MenuResource
}
