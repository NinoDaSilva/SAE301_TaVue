migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1oxaqgjhgv5vq5k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fkhfnesd",
    "name": "couleur_cadre",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "qphwejtfva2syfx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": [
        "libelle_couleur"
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
    "id": "fkhfnesd",
    "name": "couleur_cadre",
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
})
