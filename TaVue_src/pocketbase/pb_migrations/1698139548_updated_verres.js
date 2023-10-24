migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ucrl29xum28gxor")

  // remove
  collection.schema.removeField("vw6juchq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0grxnbam",
    "name": "couleur_verres",
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
  const collection = dao.findCollectionByNameOrId("ucrl29xum28gxor")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vw6juchq",
    "name": "couleur_verres",
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
  collection.schema.removeField("0grxnbam")

  return dao.saveCollection(collection)
})
