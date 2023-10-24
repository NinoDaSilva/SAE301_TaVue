migrate((db) => {
  const collection = new Collection({
    "id": "qhq1vc9c6gd8tas",
    "created": "2023-10-23 20:44:02.791Z",
    "updated": "2023-10-23 20:44:02.791Z",
    "name": "materiaux",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "j45tphvz",
        "name": "libelle_materiaux",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qhq1vc9c6gd8tas");

  return dao.deleteCollection(collection);
})
