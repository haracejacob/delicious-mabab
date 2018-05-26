import { Menu, Category } from '../../config/db'
import config from '../../config/environment'

/**
 * Todo: 파일 업로드 구현, 아래  CRUD 구현
 * ToDO: menu 수정 때도 이미지 업로드 가능하게
 */

export async function index(req, res) {
  const menus = await Menu.findAll({
    include: {
      model: Category
    }
  })

  res.status(200).json(menus)
}

export async function indexByCategory(req, res) {
  const menus = await Menu.findAll({
    include: {
      model: Category
    },
    where: {
      categoryId: req.params.categoryId,
    },
  })

  res.status(200).json(menus)
}

export async function show(req, res) {
  const menu = await Menu.find({
    where: {
      id: req.params.id
    }
  })

  if (!menu) {
    return res.status(404).end()
  }
  res.status(200).json(menu)
}

export async function create(req, res) {
  const newMenu = Menu.build(req.body)
  console.log(newMenu)
  console.log(req.file)
  res.status(200).end()
  // 1. file upload

  // 2. menu create
  const menu = await newMenu.save()

  res.status(201).json(menu)
}

export async function destroy(req, res) {
  await Menu.destroy({
    where: {
      id: req.params.id
    }
  })

  res.status(204).end()
}

export async function change(req, res) {
  console.log(req.file)
  // 파일 업로드도 구현
  res.status(204).end()
}
