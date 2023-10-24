migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ucrl29xum28gxor")

  // update
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
      "maxSelect": null,
      "displayFields": [
        "libelle_couleur",
        "hexadecimale"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ucrl29xum28gxor")

  // update
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
      "displayFields": [
        "libelle_couleur",
        "hexadecimale"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
