const single = (resource) => ({
  id: resource.id,
  title: resource.title,
  author: resource.author,
  description: resource.description,
  category: resource.category,
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
  single,
  multiple,
};
