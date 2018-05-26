export default function CategoryMenuService($resource) {
  'ngInject'

  const CategoryResource = $resource('/api/category/:id', {
    id: '@id',
  }, {})

  return CategoryResource
}
