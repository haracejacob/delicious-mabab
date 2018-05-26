export default function ReservationMenuService($resource) {
  'ngInject'

  const ReservationMenuResource = $resource('/api/reservationMenu/:id', {
    id: '@id',
  }, {})

  return ReservationMenuResource
}
