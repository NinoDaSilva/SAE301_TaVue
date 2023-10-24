migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1oxaqgjhgv5vq5k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0eqn1seo",
    "name": "materiaux",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "qhq1vc9c6gd8tas",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "libelle_materiaux"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1oxaqgjhgv5vq5k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0eqn1seo",
    "name": "materiaux",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "qhq1vc9c6gd8tas",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
