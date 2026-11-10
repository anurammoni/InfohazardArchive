module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addWatchTarget("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/img/");
  eleventyConfig.addWatchTarget("./src/img/");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};