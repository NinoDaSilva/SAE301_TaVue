migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ucrl29xum28gxor");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "ucrl29xum28gxor",
    "created": "2023-10-24 08:53:27.305Z",
    "updated": "2023-10-24 09:31:04.135Z",
    "name": "verres",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "g6ghrg7d",
        "name": "materiaux",
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
      },
      {
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
            "libelle_couleur"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
