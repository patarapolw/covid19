import axios from 'axios'

const api = axios.create({
    headers: {
        'api-key': process.env['API_KEY']
    }
})

api.get('https://opend.data.go.th/get-ckan/datastore_search_sql', {
    params: {
        sql: 'SELECT * from "67d43695-8626-45ad-9094-dabc374925ab" ORDER BY announce_date DESC LIMIT 5'
    }
}).then((r) => console.dir(r.data, { depth: null }))
