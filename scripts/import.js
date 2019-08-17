'use strict';

const fs = require('fs');
const overpass = require('query-overpass')

const run = async () => {
    const json = JSON.parse(fs.readFileSync('data/openstreetmap.json'));

    Object.keys(json).forEach(id => {
        const object = json[id];
        const path = `data/openstreetmap/${id}.geojson`;

        if (!fs.existsSync(path)) {
            const query = `${object.type}(${object.id});out body;>;out skel qt;`;

            overpass(query, (err, data) => {
                if (err) throw err;

                fs.writeFileSync(path, JSON.stringify(data));
            }, { flatProperties: true })
        } else {
            console.warn(`${path}: Skipped!`);
        }
    });
}

run();