migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1sq1xnvq64hyklh")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1sq1xnvq64hyklh")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
