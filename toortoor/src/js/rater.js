import utils from "./utils";
/* -------------------------------------------------------------------------- */

/*                               Ratings                               */

/* -------------------------------------------------------------------------- */

const ratingInit = () => {
  const raters = document.querySelectorAll("[data-rater]");
  raters.forEach((rater) => {
    const options = {
      starSize: 32,
      step: 0.5,
      element: rater,
      rateCallback(rating, done) {
        this.setRating(rating);
        done();
      },
      ...utils.getData(rater, "rater"),
    };
    return window.raterJs(options);
  });
};
export default ratingInit;
