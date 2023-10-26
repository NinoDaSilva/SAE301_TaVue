migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eu8rfy7rql8fs11")

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9zeclxe9",
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
    "id": "0sno5zal",
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
    "id": "cqyiipx0",
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
        "libelle_couleur",
        "id"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mqr4h9zz",
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
        "libelle_couleur",
        "id"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "liwnfnfd",
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
        "id"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gba6dbti",
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
        "libelle_materiaux",
        "id"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c2z9ycdx",
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
        "libelle_materiaux",
        "id"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4a0kqcvw",
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
        "libelle_materiaux",
        "id"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8sgqabd7",
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
        "libelle_type",
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eu8rfy7rql8fs11")

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

  // remove
  collection.schema.removeField("9zeclxe9")

  // remove
  collection.schema.removeField("0sno5zal")

  // remove
  collection.schema.removeField("cqyiipx0")

  // remove
  collection.schema.removeField("mqr4h9zz")

  // remove
  collection.schema.removeField("liwnfnfd")

  // remove
  collection.schema.removeField("gba6dbti")

  // remove
  collection.schema.removeField("c2z9ycdx")

  // remove
  collection.schema.removeField("4a0kqcvw")

  // remove
  collection.schema.removeField("8sgqabd7")

  return dao.saveCollection(collection)
})
