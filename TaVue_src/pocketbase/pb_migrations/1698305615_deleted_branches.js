migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dk2px2h57vuyjbi");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "dk2px2h57vuyjbi",
    "created": "2023-10-24 08:53:45.231Z",
    "updated": "2023-10-24 09:31:04.134Z",
    "name": "branches",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kgoovnjk",
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
