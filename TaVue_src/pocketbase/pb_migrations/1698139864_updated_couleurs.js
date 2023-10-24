migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qphwejtfva2syfx")

  // remove
  collection.schema.removeField("80kz2pjp")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qphwejtfva2syfx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "80kz2pjp",
    "name": "hexadecimale",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
