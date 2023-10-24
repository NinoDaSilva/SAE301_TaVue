migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1oxaqgjhgv5vq5k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e04chfpx",
    "name": "couleur_cadre",
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
  collection.schema.removeField("e04chfpx")

  return dao.saveCollection(collection)
})
