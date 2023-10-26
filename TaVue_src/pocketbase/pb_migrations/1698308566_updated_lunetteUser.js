migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eu8rfy7rql8fs11")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,\nlunette.user,\nlunette.prix\nFROM lunette"
  }

  // remove
  collection.schema.removeField("jeiprnch")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cutjdkhu",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dnpecsnt",
    "name": "prix",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eu8rfy7rql8fs11")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,\nlunette.prix\nFROM lunette"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jeiprnch",
    "name": "prix",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("cutjdkhu")

  // remove
  collection.schema.removeField("dnpecsnt")

  return dao.saveCollection(collection)
})
