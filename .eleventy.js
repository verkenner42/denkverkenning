module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("robots.txt");

  return {
    templateFormats: ["njk"],
    dir: {
      input: ".",
      output: "_site",
      data: "_data"
    }
  };
};
