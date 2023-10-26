migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eu8rfy7rql8fs11")

  collection.listRule = ""
  collection.viewRule = ""

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jqx4jevc",
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
    "id": "va27tw7s",
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
    "id": "c2pbq6xh",
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
    "id": "0frkorwe",
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
    "id": "cabg7ba1",
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
    "id": "2xeth7fa",
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
    "id": "k3quh05b",
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
    "id": "prlw0hcl",
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
    "id": "mqa1qvet",
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

  collection.listRule = null
  collection.viewRule = null

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

  // remove
  collection.schema.removeField("jqx4jevc")

  // remove
  collection.schema.removeField("va27tw7s")

  // remove
  collection.schema.removeField("c2pbq6xh")

  // remove
  collection.schema.removeField("0frkorwe")

  // remove
  collection.schema.removeField("cabg7ba1")

  // remove
  collection.schema.removeField("2xeth7fa")

  // remove
  collection.schema.removeField("k3quh05b")

  // remove
  collection.schema.removeField("prlw0hcl")

  // remove
  collection.schema.removeField("mqa1qvet")

  return dao.saveCollection(collection)
})
