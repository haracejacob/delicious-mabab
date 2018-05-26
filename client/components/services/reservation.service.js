export default function ReservationService($resource) {
  'ngInject'

  const ReservationResource = $resource('/api/reservation/:id', {
    id: '@id',
  }, {
    change: {
      method: 'PUT',
      url: '/api/reservation/:id/user',
    },
  })

  return ReservationResource
}
