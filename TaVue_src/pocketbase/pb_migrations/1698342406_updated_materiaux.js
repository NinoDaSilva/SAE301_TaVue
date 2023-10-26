migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qhq1vc9c6gd8tas")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qhq1vc9c6gd8tas")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
