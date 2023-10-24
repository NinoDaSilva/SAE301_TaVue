migrate((db) => {
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ucrl29xum28gxor")

  // remove
  collection.schema.removeField("vw6juchq")

  return dao.saveCollection(collection)
})
