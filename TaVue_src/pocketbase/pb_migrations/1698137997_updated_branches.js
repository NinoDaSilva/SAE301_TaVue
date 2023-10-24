migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dk2px2h57vuyjbi")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kgoovnjk",
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
  const collection = dao.findCollectionByNameOrId("dk2px2h57vuyjbi")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kgoovnjk",
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
