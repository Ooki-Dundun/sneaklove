require("../../config/mongodb");
const Tag = require("../../models/Tag");

const tagsData = [
    {
        label: "red nike"
    },
    {
        label: "blue adidas"
    }
]

Tag.insertMany(tagsData)
.then((tags) => console.log(tags))
.catch(err => console.log(err));

