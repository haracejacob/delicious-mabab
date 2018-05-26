import { Category } from '../../config/db'

export async function index(req, res) {
  const categories = await Category.findAll()

  res.status(200).json(categories)
}

export async function create(req, res) {
  const newCategory = Category.build(req.body)

  const category = await newCategory.save()

  res.status(201).json(category)
}

export async function destroy(req, res) {
  await Category.destroy({
    where: {
      id: req.params.id,
    },
  })

  res.status(204).end()
}

export async function change(req, res) {
  const category = await Category.find({
    where: {
      id: req.params.id,
    },
  })

  await category.update({
    name: req.body.name
  })

  res.status(204).end()
}
