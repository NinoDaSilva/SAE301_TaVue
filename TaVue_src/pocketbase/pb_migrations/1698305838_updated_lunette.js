migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("58cpwf1urasc7em")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cs9bqmjw",
    "name": "type",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "1sq1xnvq64hyklh",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "libelle_type"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("58cpwf1urasc7em")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cs9bqmjw",
    "name": "type",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "1sq1xnvq64hyklh",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "forme"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
