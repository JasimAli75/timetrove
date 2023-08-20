// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "productName",
      type: "string",
      title: "ProductName",
    },
    {
      name: "slug",
      type: "slug",
      title: "slug",
      options: {
        source: "productName",
        maxLength: 200,
        slugify: (input: any) => input.toLowerCase().replace(/\s+/g, "-"),
      },
    },
    {
      name: "image",
      type: "array",
      title: "Image",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "text",
              title: "Alternative text",
            },
          ],
        },
      ],
    },
    {
      name: "description",
      type: "array",
      title: "Description",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "productTypes",
      type: "array",
      title: "ProductType",
      of: [{ type: "string" }],
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "size",
      type: "array",
      title: "Sizes",
      of: [{ type: "string" }],
    },
  ],
};
