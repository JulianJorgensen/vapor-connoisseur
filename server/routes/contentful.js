import { createClient } from 'contentful';
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

exports.getAllContent = function(req, res){
  client.getEntries().then((response) => {
    res.status(200).send(response.items);
  })
  .catch(console.error);
};
