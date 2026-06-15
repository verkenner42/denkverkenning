module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");

  return {
    templateFormats: ["njk"],
    dir: {
      input: ".",
      output: "_site",
      data: "_data"
    }
  };
};
