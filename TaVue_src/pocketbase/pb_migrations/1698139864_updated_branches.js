migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dk2px2h57vuyjbi")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "afmgmh6d",
    "name": "couleur_branches",
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
  const collection = dao.findCollectionByNameOrId("dk2px2h57vuyjbi")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "afmgmh6d",
    "name": "couleur_branches",
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
