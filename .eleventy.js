module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addWatchTarget("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/img/");
  eleventyConfig.addWatchTarget("./src/img/");

  return {
    pathPrefix: process.env.ELEVENTY_ENV === "production" ? "/InfohazardArchive/" : "/",
    dir: {
      input: "src",
      output: "public"
    }
  };
};