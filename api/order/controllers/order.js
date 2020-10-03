"use strict";
const stripe = require("stripe")(
  "sk_test_51HXyleKV2vaRz5rU2f7O4j5GKmr2OluqdYZT4np8PDNw5kHM3HLDhilJVbf0fZzBtOxGY5tICuMPopAgW6WgsSR600Ao3GJzzc"
);
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  create: async (ctx) => {
    const { name, total, items, stripeTokenId } = ctx.request.body;
    const { id } = ctx.state.user;

    const charge = await stripe.charges.create({
      amount: Math.round(total * 100),
      currency: "usd",
      source: stripeTokenId,
      description: `Order ${new Date()} by ${ctx.state.user.username}`,
    });
    const order = await strapi.services.order.create({
      name,
      total,
      items,
      user: id,
    });
    return order;
  },
};
