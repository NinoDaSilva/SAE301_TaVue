migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("58cpwf1urasc7em")

  // remove
  collection.schema.removeField("bchfbv98")

  // remove
  collection.schema.removeField("5cnmfgui")

  // remove
  collection.schema.removeField("vgpykvdv")

  // remove
  collection.schema.removeField("dko4albe")

  // add
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

  // add
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

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("58cpwf1urasc7em")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bchfbv98",
    "name": "commande",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5cnmfgui",
    "name": "materiaux_cadre",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "qhq1vc9c6gd8tas",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vgpykvdv",
    "name": "materiaux_branches",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "qhq1vc9c6gd8tas",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dko4albe",
    "name": "materiaux_verres",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "qhq1vc9c6gd8tas",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // remove
  collection.schema.removeField("uhfgfpsc")

  // remove
  collection.schema.removeField("xuxqps7v")

  // remove
  collection.schema.removeField("hswr0mj2")

  return dao.saveCollection(collection)
})
