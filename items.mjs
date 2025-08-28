import fs from 'fs'
import items_json from './src/items.json' with { type: 'json' }
import { Snowflake } from 'nodejs-snowflake'

const uid = new Snowflake()

const items_path = './src/items.json' //lê o arquivo que tem os produtos pra gerar o ID automaticamente

for (const category of items_json) {
  for (const item of category.items) {
    if (!item.uid) {
      item.uid = uid.getUniqueID().toString()
    }
  }
}

fs.writeFileSync(items_path, JSON.stringify(items_json))