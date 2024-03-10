let url = "https://cute-jade-binturong-boot.cyclic.app/api";

// const makeOrder = async () => {
//   const response = await fetch(
//     `${url}/order/make-order?access_token=64bebc1e2c6d3f056a8c85b7`,
//     {
//       method: "POST",
//       body: JSON.stringify({
//         shop_list: [
//           {
//             _id: "64c4b664b4119fdcdbfcd412",
//             title: "Cyclamen",
//             price: 29.39,
//             discount: false,
//             discount_price: "0",
//             short_description:
//               "Cyclamen is a genus of flowering plants that is native to Europe and the Mediterranean region. These plants are known for their attractive, heart-shaped leaves that are often patterned with silver or gray markings, as well as their showy, fragrant flowers that appear in shades of pink, red, white, and purple. Cyclamen are commonly grown as ornamental plants, both indoors and outdoors, and are often used in flower arrangements. They prefer cool temperatures and well-drained soil, and are typically dormant during the summer months. Cyclamen have also been used in traditional medicine to treat a variety of ailments, including respiratory problems, headaches, and skin conditions.",
//             description:
//               "Cyclamen is a genus of plants that belongs to the family Primulaceae and includes about 20 species. These plants are native to the Mediterranean region, Europe, and parts of Asia and Africa. Cyclamen are herbaceous perennials that grow from tubers, and they are known for their attractive foliage and showy flowers. <br/><br/> Cyclamen leaves are typically heart-shaped and have a distinct pattern of silver or gray markings on them. The leaves are often held on long petioles that emerge directly from the tuber. The flowers are fragrant and come in shades of pink, red, white, and purple. They have five petals that are reflexed backwards and form a distinctive tube-like shape. The flowers are borne on long, slender stems that rise above the foliage. <br/><br/> Cyclamen are popular as ornamental plants and are commonly grown both indoors and outdoors. They prefer cool temperatures and well-drained soil, and are typically dormant during the summer months. Cyclamen can be propagated from seed or by dividing the tuber. They are often used in flower arrangements, and some species are also grown for their edible tubers, which are high in starch and can be cooked and eaten like potatoes. <br/><br/> In addition to their ornamental and culinary uses, Cyclamen have been used in traditional medicine to treat various ailments. For example, the tubers of Cyclamen hederifolium have been used to treat headaches, while extracts from Cyclamen persicum have been used to treat skin conditions such as eczema. However, it's important to note that Cyclamen can be toxic if ingested, and should be kept away from children and pets.",
//             main_image:
//               "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fcyclamen.png?alt=media&token=d13f0b82-79ae-4f15-ad41-ac65d1b5f6a3",
//             detailed_images: [
//               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZcCnW0po8wXczsgi2LvK1xq3qe6azjIhfpCyF1nK9cs-1G-qNKewWotOnI6kZ-jcE3P8&usqp=CAU",
//               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8k-WXCKZmMSjo05ehdSwLjsInx_xeLzh5AA&usqp=CAU",
//               "https://www.sendabasket.com.au/wp-content/uploads/2012/07/plant-send-a-basket-cyclamen-jpg.webp",
//               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmjVczjaiYuB1EIwTMeWmqhWs7T8EH-6RNA&usqp=CAU",
//             ],
//             rate: 0,
//             views: 0,
//             tags: [],
//             comments: [],
//             sold_times: 0,
//             created_by: "64bebc1e2c6d3f056a8c85b7",
//             created_at: "2023-07-29T06:49:08.019Z",
//             __v: 0,
//             count: 4,
//           },
//         ],
//         billing_address: {
//           name: "Asadbek",
//           surname: "Abduvoitov",
//         },
//         extra_shop_info: {
//           total: 117.56,
//           method: "cash-on-delivery",
//         },
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   const data = await response.json();
//   console.log(data);
// };

// makeOrder();

// Get order

const getOrder = async () => {
  const response = await fetch(
    `${url}/order/get-order?access_token=64bebc1e2c6d3f056a8c85b7`
  );
  const data = await response.json();
  console.log(data);
};
// getOrder();

// Delete order

const deleteOrder = async () => {
  const response = await fetch(
    `${url}/order/delete-order?access_token=64bebc1e2c6d3f056a8c85b7`,
    {
      method: "DELETE",
      body: JSON.stringify({
        _id: "65199ae2fdccd25c019612a0",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
};

// deleteOrder();

// Get Post with new api

// const getPosts = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   console.log(data);
// };
// getPosts();

// PUT method to update

const updateOrder = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/3", {
    method: "PUT",
    body: JSON.stringify({
      title: "Hello World",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
};

updateOrder();
