migrate((db) => {
  const collection = new Collection({
    "id": "eu8rfy7rql8fs11",
    "created": "2023-10-26 08:21:19.320Z",
    "updated": "2023-10-26 08:21:19.320Z",
    "name": "lunetteUser",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jeiprnch",
        "name": "prix",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id,\nlunette.prix\nFROM lunette"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("eu8rfy7rql8fs11");

  return dao.deleteCollection(collection);
})
