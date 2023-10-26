migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("58cpwf1urasc7em")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xuxqps7v",
    "name": "verres",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ucrl29xum28gxor",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": [
        "id",
        "materiaux"
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
    "id": "xuxqps7v",
    "name": "verres",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ucrl29xum28gxor",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": [
        "id",
        "materiaux",
        "couleur_verres"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
