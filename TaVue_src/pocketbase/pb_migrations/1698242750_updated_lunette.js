migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("58cpwf1urasc7em")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8ybwlcdv",
    "name": "commande",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("58cpwf1urasc7em")

  // remove
  collection.schema.removeField("8ybwlcdv")

  return dao.saveCollection(collection)
})
