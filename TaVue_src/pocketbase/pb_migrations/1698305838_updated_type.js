migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1sq1xnvq64hyklh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fvlm3chh",
    "name": "libelle_type",
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
  const collection = dao.findCollectionByNameOrId("1sq1xnvq64hyklh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fvlm3chh",
    "name": "forme",
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
})
