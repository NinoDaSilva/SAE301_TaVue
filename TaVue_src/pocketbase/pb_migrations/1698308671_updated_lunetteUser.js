migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eu8rfy7rql8fs11")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,\nlunette.user,\nlunette.prix,\nlunette.couleur_branches,\nlunette.couleur_cadre,\nlunette.couleur_verres,\nlunette.materiaux_branches,\nlunette.materiaux_cadre,\nlunette.materiaux_verres,\nlunette.forme\nFROM lunette\nGROUP BY lunette.user"
  }

  // remove
  collection.schema.removeField("cutjdkhu")

  // remove
  collection.schema.removeField("dnpecsnt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m0zrwwu7",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ysrz6yhm",
    "name": "prix",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tl7ozmlq",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yhouykjg",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "siqobefd",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o0pcnsoj",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cidqbfz7",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vpkwr1fb",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pu1lvixc",
    "name": "forme",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "1sq1xnvq64hyklh",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "libelle_type"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eu8rfy7rql8fs11")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,\nlunette.user,\nlunette.prix\nFROM lunette"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cutjdkhu",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dnpecsnt",
    "name": "prix",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("m0zrwwu7")

  // remove
  collection.schema.removeField("ysrz6yhm")

  // remove
  collection.schema.removeField("tl7ozmlq")

  // remove
  collection.schema.removeField("yhouykjg")

  // remove
  collection.schema.removeField("siqobefd")

  // remove
  collection.schema.removeField("o0pcnsoj")

  // remove
  collection.schema.removeField("cidqbfz7")

  // remove
  collection.schema.removeField("vpkwr1fb")

  // remove
  collection.schema.removeField("pu1lvixc")

  return dao.saveCollection(collection)
})
