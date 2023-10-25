migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1x1x09kixk8armr");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "1x1x09kixk8armr",
    "created": "2023-10-24 08:52:15.158Z",
    "updated": "2023-10-24 09:01:37.105Z",
    "name": "commande",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vxpodk4a",
        "name": "lunettes",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "58cpwf1urasc7em",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": [
            "id"
          ]
        }
      },
      {
        "system": false,
        "id": "niddnyll",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id",
            "username",
            "email"
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
