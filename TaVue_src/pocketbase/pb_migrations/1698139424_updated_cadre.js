migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1oxaqgjhgv5vq5k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qrvjppkn",
    "name": "type_cadre",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1oxaqgjhgv5vq5k")

  // remove
  collection.schema.removeField("qrvjppkn")

  return dao.saveCollection(collection)
})
