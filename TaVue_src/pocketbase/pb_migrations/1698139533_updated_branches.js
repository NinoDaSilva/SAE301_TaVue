migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dk2px2h57vuyjbi")

  // remove
  collection.schema.removeField("epubun9l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "afmgmh6d",
    "name": "couleur_branches",
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

  // remove
  collection.schema.removeField("afmgmh6d")

  return dao.saveCollection(collection)
})
