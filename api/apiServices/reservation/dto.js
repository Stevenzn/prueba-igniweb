const single = (resource) => ({
  id: resource.Book.id,
  title: resource.Book.title,
  author: resource.Book.author,
  description: resource.Book.description,
  final_date:resource.final_date
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
  single,
  multiple,
};
