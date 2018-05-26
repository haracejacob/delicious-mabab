import _ from 'lodash'
import db, { Reservation, ReservationMenu } from '../../config/db'

export async function index(req, res) {
  const reservations = await Reservation.findAll({
    include: {
      model: ReservationMenu,
    },
  })

  res.status(200).json(reservations)
}

export async function show(req, res) {
  const reservation = await Reservation.find({
    include: {
      model: ReservationMenu,
    },
    where: {
      id: req.params.id
    },
  })

  if (!reservation) {
    return res.status(404).end()
  }

  res.json(reservation)
}

export async function create(req, res) {
  const promises = []

  db.sequelize.transaction(async transaction => {
    const newReservation = Reservation.build(req.body)
    newReservation.setDataValue('status', 0)

    promises.push(newReservation.save({ transaction }))

    req.body.reservationMenus.forEach(val => {
      const reservationMenu = ReservationMenu.build(val)

      promises.push(reservationMenu.save({ transaction }))
    })

    const result = await Promise.all(promises)

    res.status(201).json({ result })
  })
}

export async function destroy(req, res) {
  await Reservation.destroy({ where: { id: req.params.id } })

  res.status(204).end()
}

//사용자용 수정 함수, status, reservationTime만 변경 가능
export async function changeUser(req, res) {
  const reservation = await Reservation.find({
    where: {
      id: req.params.id
    }
  })

  if (req.body.status) {
    reservation.status = req.body.status
  }
  if (req.body.reservationTime) {
    reservation.reservationTime = req.body.reservationTime
  }

  await reservation.save()

  res.status(204).end()
}

export async function change(req, res) {
  const newReservation = Reservation.build(req.body)

  // validation check
  if (_.get(newReservation, 'id')) {
    _.unset(newReservation, 'id')
  }

  if (_.get(newReservation, 'userId')) {
    _.unset(newReservation, 'userId')
  }

  const reservation = Reservation.find({
    where: {
      id: req.params.id,
    },
  })

  await reservation.update(newReservation)

  res.status(204).end()
}
