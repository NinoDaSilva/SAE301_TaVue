migrate((db) => {
  const collection = new Collection({
    "id": "58cpwf1urasc7em",
    "created": "2023-10-23 20:48:21.438Z",
    "updated": "2023-10-23 20:48:21.438Z",
    "name": "lunette",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jttxopit",
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
        "id": "qrty2flm",
        "name": "couleur_cadre",
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
        "id": "cadsnccr",
        "name": "couleur_verres",
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
        "id": "zn0t8dji",
        "name": "couleur_branches",
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
        "id": "rqpy2ksk",
        "name": "prix",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "bchfbv98",
        "name": "commande",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "5cnmfgui",
        "name": "materiaux_cadre",
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
      },
      {
        "system": false,
        "id": "vgpykvdv",
        "name": "materiaux_branches",
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
      },
      {
        "system": false,
        "id": "dko4albe",
        "name": "materiaux_verres",
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
  const collection = dao.findCollectionByNameOrId("58cpwf1urasc7em");

  return dao.deleteCollection(collection);
})
