migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("58cpwf1urasc7em")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uhfgfpsc",
    "name": "cadre",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "1oxaqgjhgv5vq5k",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "id",
        "materiaux"
      ]
    }
  }))

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
      "maxSelect": 1,
      "displayFields": [
        "id",
        "materiaux"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hswr0mj2",
    "name": "branches",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ucrl29xum28gxor",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
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
    "id": "uhfgfpsc",
    "name": "cadre",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "1oxaqgjhgv5vq5k",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

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
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hswr0mj2",
    "name": "branches",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ucrl29xum28gxor",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
