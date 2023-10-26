migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("58cpwf1urasc7em")

  // update
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
      "displayFields": [
        "libelle_couleur"
      ]
    }
  }))

  // update
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
      "displayFields": [
        "libelle_couleur"
      ]
    }
  }))

  // update
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
      "displayFields": [
        "libelle_couleur"
      ]
    }
  }))

  // update
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
      "displayFields": [
        "libelle_materiaux"
      ]
    }
  }))

  // update
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
      "displayFields": [
        "libelle_materiaux"
      ]
    }
  }))

  // update
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
      "displayFields": [
        "libelle_materiaux"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("58cpwf1urasc7em")

  // update
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

  // update
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

  // update
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

  // update
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

  // update
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

  // update
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
})
