export const formatQuestion = (question) =>
  question
    .replace(/&quot;/g, '"')
    .replace(/&eacute;/g, "e")
    .replace(/&#039;/g, `'`)
    .replace(/&rsquo;/g, `'`)
    .replace(/&deg;/g, `°`);
