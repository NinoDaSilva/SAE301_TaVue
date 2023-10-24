migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1x1x09kixk8armr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vxpodk4a",
    "name": "lunettes",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "58cpwf1urasc7em",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1x1x09kixk8armr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vxpodk4a",
    "name": "lunettes",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "58cpwf1urasc7em",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
