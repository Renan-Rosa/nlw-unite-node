// src/utils/generate-slug.ts
function convertToSlug(title) {
  return title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
}

export {
  convertToSlug
};
