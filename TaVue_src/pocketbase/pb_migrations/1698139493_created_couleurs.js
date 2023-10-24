migrate((db) => {
  const collection = new Collection({
    "id": "qphwejtfva2syfx",
    "created": "2023-10-24 09:24:53.258Z",
    "updated": "2023-10-24 09:24:53.258Z",
    "name": "couleurs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5hnn2svc",
        "name": "rouge",
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
        "id": "jwupem61",
        "name": "noir",
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
        "id": "rv3m2mx2",
        "name": "bleu",
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
        "id": "80kz2pjp",
        "name": "gris",
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
  const collection = dao.findCollectionByNameOrId("qphwejtfva2syfx");

  return dao.deleteCollection(collection);
})
