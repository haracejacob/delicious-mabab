import { ReservationMenu } from '../../config/db'
import _ from 'lodash'

export async function create(req, res) {
  const newReservationMenu = ReservationMenu.build(req.body)

  const reservationMenu = await newReservationMenu.save()

  res.status(201).json(reservationMenu)
}

export async function destroy(req, res) {
  await ReservationMenu.destroy({
    where: {
      id: req.params.id
    }
  })

  res.status(204).end()
}

// 개수 변경만 가능
export async function change(req, res) {
  const newReservation = ReservationMenu.build(req.body)

  // validation check
  if (_.get(newReservation, 'reservationId')) {
    _.unset(newReservation, 'reservationId')
  }

  if (_.get(newReservation, 'menuId')) {
    _.unset(newReservation, 'menuId')
  }

  const reservationMenu = ReservationMenu.find({
    where: {
      id: req.params.id,
    },
  })

  await reservationMenu.update(newReservation)

  res.status(204).end()
}
