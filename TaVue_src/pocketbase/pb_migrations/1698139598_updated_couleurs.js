migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qphwejtfva2syfx")

  // remove
  collection.schema.removeField("5hnn2svc")

  // remove
  collection.schema.removeField("jwupem61")

  // remove
  collection.schema.removeField("rv3m2mx2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nuwend3p",
    "name": "libelle_couleur",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "80kz2pjp",
    "name": "hexadecimale",
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
  const collection = dao.findCollectionByNameOrId("qphwejtfva2syfx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5hnn2svc",
    "name": "rouge",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jwupem61",
    "name": "noir",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rv3m2mx2",
    "name": "bleu",
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
  collection.schema.removeField("nuwend3p")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "80kz2pjp",
    "name": "gris",
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
