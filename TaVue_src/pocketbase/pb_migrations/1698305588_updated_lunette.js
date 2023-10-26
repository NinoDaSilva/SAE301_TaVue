migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("58cpwf1urasc7em")

  // remove
  collection.schema.removeField("uhfgfpsc")

  // remove
  collection.schema.removeField("xuxqps7v")

  // remove
  collection.schema.removeField("hswr0mj2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zjgv5jxt",
    "name": "couleur_cadre",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xk1m5cxu",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vqme19qx",
    "name": "couleur_branches",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hnpvwlpv",
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
    "id": "hkg1iqpc",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kglmi2cn",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("58cpwf1urasc7em")

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
      "maxSelect": null,
      "displayFields": [
        "id",
        "materiaux"
      ]
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
      "maxSelect": null,
      "displayFields": [
        "id",
        "materiaux"
      ]
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
      "maxSelect": null,
      "displayFields": [
        "id",
        "materiaux"
      ]
    }
  }))

  // remove
  collection.schema.removeField("zjgv5jxt")

  // remove
  collection.schema.removeField("xk1m5cxu")

  // remove
  collection.schema.removeField("vqme19qx")

  // remove
  collection.schema.removeField("hnpvwlpv")

  // remove
  collection.schema.removeField("hkg1iqpc")

  // remove
  collection.schema.removeField("kglmi2cn")

  return dao.saveCollection(collection)
})
