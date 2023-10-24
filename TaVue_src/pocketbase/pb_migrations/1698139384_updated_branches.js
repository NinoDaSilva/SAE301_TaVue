migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dk2px2h57vuyjbi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "epubun9l",
    "name": "couleur_branches",
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
  const collection = dao.findCollectionByNameOrId("dk2px2h57vuyjbi")

  // remove
  collection.schema.removeField("epubun9l")

  return dao.saveCollection(collection)
})
