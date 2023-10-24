migrate((db) => {
  const collection = new Collection({
    "id": "dk2px2h57vuyjbi",
    "created": "2023-10-24 08:53:45.231Z",
    "updated": "2023-10-24 08:53:45.231Z",
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
  const collection = dao.findCollectionByNameOrId("dk2px2h57vuyjbi");

  return dao.deleteCollection(collection);
})
