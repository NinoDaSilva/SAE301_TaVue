migrate((db) => {
  const collection = new Collection({
    "id": "1sq1xnvq64hyklh",
    "created": "2023-10-26 07:36:17.000Z",
    "updated": "2023-10-26 07:36:17.000Z",
    "name": "type",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fvlm3chh",
        "name": "forme",
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
  const collection = dao.findCollectionByNameOrId("1sq1xnvq64hyklh");

  return dao.deleteCollection(collection);
})
