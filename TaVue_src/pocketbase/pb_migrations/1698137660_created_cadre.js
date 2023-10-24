migrate((db) => {
  const collection = new Collection({
    "id": "1oxaqgjhgv5vq5k",
    "created": "2023-10-24 08:54:20.868Z",
    "updated": "2023-10-24 08:54:20.868Z",
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
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("1oxaqgjhgv5vq5k");

  return dao.deleteCollection(collection);
})
