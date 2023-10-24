migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1oxaqgjhgv5vq5k")

  // remove
  collection.schema.removeField("e04chfpx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fkhfnesd",
    "name": "couleur_cadre",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "qphwejtfva2syfx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
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

  // remove
  collection.schema.removeField("fkhfnesd")

  return dao.saveCollection(collection)
})
