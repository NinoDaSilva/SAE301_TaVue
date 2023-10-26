migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1oxaqgjhgv5vq5k");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "1oxaqgjhgv5vq5k",
    "created": "2023-10-24 08:54:20.868Z",
    "updated": "2023-10-24 09:31:04.134Z",
    "name": "cadre",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0eqn1seo",
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
        "id": "qrvjppkn",
        "name": "type_cadre",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
