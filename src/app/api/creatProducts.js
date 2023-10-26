import prisma from '@/lib/db/prisma'

export default async function handler(req, res) {
  //await prisma.table.deleteMany();
  //await prisma.review.deleteMany();
  /* await prisma.product.deleteMany()
  await prisma.product.createMany({
    data: [
      {
        name: 'iPhone 9',
        discription: 'An apple mobile which is nothing like apple',
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/1/1.jpg',
          'https://i.dummyjson.com/data/products/1/2.jpg',
          'https://i.dummyjson.com/data/products/1/3.jpg',
          'https://i.dummyjson.com/data/products/1/4.jpg',
          'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        ],
      },
      {
        name: 'iPhone X',
        discription:
          'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/2/1.jpg',
          'https://i.dummyjson.com/data/products/2/2.jpg',
          'https://i.dummyjson.com/data/products/2/3.jpg',
          'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
        ],
      },
      {
        name: 'Samsung Universe 9',
        discription:
          "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: 'Samsung',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
        images: ['https://i.dummyjson.com/data/products/3/1.jpg'],
      },
      {
        name: 'OPPOF19',
        discription: 'OPPO F19 is officially announced on April 2021.',
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        stock: 123,
        brand: 'OPPO',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/4/1.jpg',
          'https://i.dummyjson.com/data/products/4/2.jpg',
          'https://i.dummyjson.com/data/products/4/3.jpg',
          'https://i.dummyjson.com/data/products/4/4.jpg',
          'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
        ],
      },
      {
        name: 'Huawei P30',
        discription:
          'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09,
        stock: 32,
        brand: 'Huawei',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/5/1.jpg',
          'https://i.dummyjson.com/data/products/5/2.jpg',
          'https://i.dummyjson.com/data/products/5/3.jpg',
        ],
      },
      {
        name: 'MacBook Pro',
        discription:
          'MacBook Pro 2021 with mini-LED display may launch between September, November',
        price: 1749,
        discountPercentage: 11.02,
        rating: 4.57,
        stock: 83,
        brand: 'Apple',
        category: 'laptops',
        thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
        images: [
          'https://i.dummyjson.com/data/products/6/1.png',
          'https://i.dummyjson.com/data/products/6/2.jpg',
          'https://i.dummyjson.com/data/products/6/3.png',
          'https://i.dummyjson.com/data/products/6/4.jpg',
        ],
      },
      {
        name: 'Samsung Galaxy Book',
        discription:
          'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
        price: 1499,
        discountPercentage: 4.15,
        rating: 4.25,
        stock: 50,
        brand: 'Samsung',
        category: 'laptops',
        thumbnail: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/7/1.jpg',
          'https://i.dummyjson.com/data/products/7/2.jpg',
          'https://i.dummyjson.com/data/products/7/3.jpg',
          'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
        ],
      },
      {
        name: 'Microsoft Surface Laptop 4',
        discription:
          'Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.',
        price: 1499,
        discountPercentage: 10.23,
        rating: 4.43,
        stock: 68,
        brand: 'Microsoft Surface',
        category: 'laptops',
        thumbnail: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/8/1.jpg',
          'https://i.dummyjson.com/data/products/8/2.jpg',
          'https://i.dummyjson.com/data/products/8/3.jpg',
          'https://i.dummyjson.com/data/products/8/4.jpg',
          'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
        ],
      },
      {
        name: 'Infinix INBOOK',
        discription:
          'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
        price: 1099,
        discountPercentage: 11.83,
        rating: 4.54,
        stock: 96,
        brand: 'Infinix',
        category: 'laptops',
        thumbnail: 'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/9/1.jpg',
          'https://i.dummyjson.com/data/products/9/2.png',
          'https://i.dummyjson.com/data/products/9/3.png',
          'https://i.dummyjson.com/data/products/9/4.jpg',
          'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
        ],
      },
      {
        name: 'HP Pavilion 15-DK1056WM',
        discription:
          'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10',
        price: 1099,
        discountPercentage: 6.18,
        rating: 4.43,
        stock: 89,
        brand: 'HP Pavilion',
        category: 'laptops',
        thumbnail: 'https://i.dummyjson.com/data/products/10/thumbnail.jpeg',
        images: [
          'https://i.dummyjson.com/data/products/10/1.jpg',
          'https://i.dummyjson.com/data/products/10/2.jpg',
          'https://i.dummyjson.com/data/products/10/3.jpg',
          'https://i.dummyjson.com/data/products/10/thumbnail.jpeg',
        ],
      },
      {
        name: 'perfume Oil',
        discription:
          'Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil',
        price: 13,
        discountPercentage: 8.4,
        rating: 4.26,
        stock: 65,
        brand: 'Impression of Acqua Di Gio',
        category: 'fragrances',
        thumbnail: 'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/11/1.jpg',
          'https://i.dummyjson.com/data/products/11/2.jpg',
          'https://i.dummyjson.com/data/products/11/3.jpg',
          'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
        ],
      },
      {
        name: 'Brown Perfume',
        discription: 'Royal_Mirage Sport Brown Perfume for Men & Women - 120ml',
        price: 40,
        discountPercentage: 15.66,
        rating: 4,
        stock: 52,
        brand: 'Royal_Mirage',
        category: 'fragrances',
        thumbnail: 'https://i.dummyjson.com/data/products/12/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/12/1.jpg',
          'https://i.dummyjson.com/data/products/12/2.jpg',
          'https://i.dummyjson.com/data/products/12/3.png',
          'https://i.dummyjson.com/data/products/12/4.jpg',
          'https://i.dummyjson.com/data/products/12/thumbnail.jpg',
        ],
      },
      {
        name: 'Fog Scent Xpressio Perfume',
        discription:
          'Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men',
        price: 13,
        discountPercentage: 8.14,
        rating: 4.59,
        stock: 61,
        brand: 'Fog Scent Xpressio',
        category: 'fragrances',
        thumbnail: 'https://i.dummyjson.com/data/products/13/thumbnail.webp',
        images: [
          'https://i.dummyjson.com/data/products/13/1.jpg',
          'https://i.dummyjson.com/data/products/13/2.png',
          'https://i.dummyjson.com/data/products/13/3.jpg',
          'https://i.dummyjson.com/data/products/13/4.jpg',
          'https://i.dummyjson.com/data/products/13/thumbnail.webp',
        ],
      },
      {
        name: 'Non-Alcoholic Concentrated Perfume Oil',
        discription:
          'Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil',
        price: 120,
        discountPercentage: 15.6,
        rating: 4.21,
        stock: 114,
        brand: 'Al Munakh',
        category: 'fragrances',
        thumbnail: 'https://i.dummyjson.com/data/products/14/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/14/1.jpg',
          'https://i.dummyjson.com/data/products/14/2.jpg',
          'https://i.dummyjson.com/data/products/14/3.jpg',
          'https://i.dummyjson.com/data/products/14/thumbnail.jpg',
        ],
      },
      {
        name: 'Eau De Perfume Spray',
        discription:
          'Genuine Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality',
        price: 30,
        discountPercentage: 10.99,
        rating: 4.7,
        stock: 105,
        brand: 'Lord - Al-Rehab',
        category: 'fragrances',
        thumbnail: 'https://i.dummyjson.com/data/products/15/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/15/1.jpg',
          'https://i.dummyjson.com/data/products/15/2.jpg',
          'https://i.dummyjson.com/data/products/15/3.jpg',
          'https://i.dummyjson.com/data/products/15/4.jpg',
          'https://i.dummyjson.com/data/products/15/thumbnail.jpg',
        ],
      },
      {
        name: 'Hyaluronic Acid Serum',
        discription:
          "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
        price: 19,
        discountPercentage: 13.31,
        rating: 4.83,
        stock: 110,
        brand: "L'Oreal Paris",
        category: 'skincare',
        thumbnail: 'https://i.dummyjson.com/data/products/16/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/16/1.png',
          'https://i.dummyjson.com/data/products/16/2.webp',
          'https://i.dummyjson.com/data/products/16/3.jpg',
          'https://i.dummyjson.com/data/products/16/4.jpg',
          'https://i.dummyjson.com/data/products/16/thumbnail.jpg',
        ],
      },
      {
        name: 'Tree Oil 30ml',
        discription:
          'Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,',
        price: 12,
        discountPercentage: 4.09,
        rating: 4.52,
        stock: 78,
        brand: 'Hemani Tea',
        category: 'skincare',
        thumbnail: 'https://i.dummyjson.com/data/products/17/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/17/1.jpg',
          'https://i.dummyjson.com/data/products/17/2.jpg',
          'https://i.dummyjson.com/data/products/17/3.jpg',
          'https://i.dummyjson.com/data/products/17/thumbnail.jpg',
        ],
      },
      {
        name: 'Oil Free Moisturizer 100ml',
        discription:
          'Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.',
        price: 40,
        discountPercentage: 13.1,
        rating: 4.56,
        stock: 88,
        brand: 'Dermive',
        category: 'skincare',
        thumbnail: 'https://i.dummyjson.com/data/products/18/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/18/1.jpg',
          'https://i.dummyjson.com/data/products/18/2.jpg',
          'https://i.dummyjson.com/data/products/18/3.jpg',
          'https://i.dummyjson.com/data/products/18/4.jpg',
          'https://i.dummyjson.com/data/products/18/thumbnail.jpg',
        ],
      },
      {
        name: 'Skin Beauty Serum.',
        discription:
          'Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m',
        price: 46,
        discountPercentage: 10.68,
        rating: 4.42,
        stock: 54,
        brand: 'ROREC White Rice',
        category: 'skincare',
        thumbnail: 'https://i.dummyjson.com/data/products/19/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/19/1.jpg',
          'https://i.dummyjson.com/data/products/19/2.jpg',
          'https://i.dummyjson.com/data/products/19/3.png',
          'https://i.dummyjson.com/data/products/19/thumbnail.jpg',
        ],
      },
      {
        name: 'Freckle Treatment Cream- 15gm',
        discription:
          "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
        price: 70,
        discountPercentage: 16.99,
        rating: 4.06,
        stock: 140,
        brand: 'Fair & Clear',
        category: 'skincare',
        thumbnail: 'https://i.dummyjson.com/data/products/20/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/20/1.jpg',
          'https://i.dummyjson.com/data/products/20/2.jpg',
          'https://i.dummyjson.com/data/products/20/3.jpg',
          'https://i.dummyjson.com/data/products/20/4.jpg',
          'https://i.dummyjson.com/data/products/20/thumbnail.jpg',
        ],
      },
      {
        name: '- Daal Masoor 500 grams',
        discription:
          'Fine quality Branded Product Keep in a cool and dry place',
        price: 20,
        discountPercentage: 4.81,
        rating: 4.44,
        stock: 133,
        brand: 'Saaf & Khaas',
        category: 'groceries',
        thumbnail: 'https://i.dummyjson.com/data/products/21/thumbnail.png',
        images: [
          'https://i.dummyjson.com/data/products/21/1.png',
          'https://i.dummyjson.com/data/products/21/2.jpg',
          'https://i.dummyjson.com/data/products/21/3.jpg',
        ],
      },
      {
        name: 'Elbow Macaroni - 400 gm',
        discription:
          'Product details of Bake Parlor Big Elbow Macaroni - 400 gm',
        price: 14,
        discountPercentage: 15.58,
        rating: 4.57,
        stock: 146,
        brand: 'Bake Parlor Big',
        category: 'groceries',
        thumbnail: 'https://i.dummyjson.com/data/products/22/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/22/1.jpg',
          'https://i.dummyjson.com/data/products/22/2.jpg',
          'https://i.dummyjson.com/data/products/22/3.jpg',
        ],
      },
      {
        name: 'Orange Essence Food Flavou',
        discription:
          'Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item',
        price: 14,
        discountPercentage: 8.04,
        rating: 4.85,
        stock: 26,
        brand: 'Baking Food Items',
        category: 'groceries',
        thumbnail: 'https://i.dummyjson.com/data/products/23/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/23/1.jpg',
          'https://i.dummyjson.com/data/products/23/2.jpg',
          'https://i.dummyjson.com/data/products/23/3.jpg',
          'https://i.dummyjson.com/data/products/23/4.jpg',
          'https://i.dummyjson.com/data/products/23/thumbnail.jpg',
        ],
      },
      {
        name: 'cereals muesli fruit nuts',
        discription:
          'original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji',
        price: 46,
        discountPercentage: 16.8,
        rating: 4.94,
        stock: 113,
        brand: 'fauji',
        category: 'groceries',
        thumbnail: 'https://i.dummyjson.com/data/products/24/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/24/1.jpg',
          'https://i.dummyjson.com/data/products/24/2.jpg',
          'https://i.dummyjson.com/data/products/24/3.jpg',
          'https://i.dummyjson.com/data/products/24/4.jpg',
          'https://i.dummyjson.com/data/products/24/thumbnail.jpg',
        ],
      },
      {
        name: 'Gulab Powder 50 Gram',
        discription:
          'Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds',
        price: 70,
        discountPercentage: 13.58,
        rating: 4.87,
        stock: 47,
        brand: 'Dry Rose',
        category: 'groceries',
        thumbnail: 'https://i.dummyjson.com/data/products/25/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/25/1.png',
          'https://i.dummyjson.com/data/products/25/2.jpg',
          'https://i.dummyjson.com/data/products/25/3.png',
          'https://i.dummyjson.com/data/products/25/4.jpg',
          'https://i.dummyjson.com/data/products/25/thumbnail.jpg',
        ],
      },
      {
        name: 'Plant Hanger For Home',
        discription:
          'Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf',
        price: 41,
        discountPercentage: 17.86,
        rating: 4.08,
        stock: 131,
        brand: 'Boho Decor',
        category: 'home-decoration',
        thumbnail: 'https://i.dummyjson.com/data/products/26/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/26/1.jpg',
          'https://i.dummyjson.com/data/products/26/2.jpg',
          'https://i.dummyjson.com/data/products/26/3.jpg',
          'https://i.dummyjson.com/data/products/26/4.jpg',
          'https://i.dummyjson.com/data/products/26/5.jpg',
          'https://i.dummyjson.com/data/products/26/thumbnail.jpg',
        ],
      },
      {
        name: 'Flying Wooden Bird',
        discription:
          'Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm',
        price: 51,
        discountPercentage: 15.58,
        rating: 4.41,
        stock: 17,
        brand: 'Flying Wooden',
        category: 'home-decoration',
        thumbnail: 'https://i.dummyjson.com/data/products/27/thumbnail.webp',
        images: [
          'https://i.dummyjson.com/data/products/27/1.jpg',
          'https://i.dummyjson.com/data/products/27/2.jpg',
          'https://i.dummyjson.com/data/products/27/3.jpg',
          'https://i.dummyjson.com/data/products/27/4.jpg',
          'https://i.dummyjson.com/data/products/27/thumbnail.webp',
        ],
      },
      {
        name: '3D Embellishment Art Lamp',
        discription:
          '3D led lamp sticker Wall sticker 3d wall art light on/off button cell operated (included)',
        price: 20,
        discountPercentage: 16.49,
        rating: 4.82,
        stock: 54,
        brand: 'LED Lights',
        category: 'home-decoration',
        thumbnail: 'https://i.dummyjson.com/data/products/28/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/28/1.jpg',
          'https://i.dummyjson.com/data/products/28/2.jpg',
          'https://i.dummyjson.com/data/products/28/3.png',
          'https://i.dummyjson.com/data/products/28/4.jpg',
          'https://i.dummyjson.com/data/products/28/thumbnail.jpg',
        ],
      },
      {
        name: 'Handcraft Chinese style',
        discription:
          'Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate',
        price: 60,
        discountPercentage: 15.34,
        rating: 4.44,
        stock: 7,
        brand: 'luxury palace',
        category: 'home-decoration',
        thumbnail: 'https://i.dummyjson.com/data/products/29/thumbnail.webp',
        images: [
          'https://i.dummyjson.com/data/products/29/1.jpg',
          'https://i.dummyjson.com/data/products/29/2.jpg',
          'https://i.dummyjson.com/data/products/29/3.webp',
          'https://i.dummyjson.com/data/products/29/4.webp',
          'https://i.dummyjson.com/data/products/29/thumbnail.webp',
        ],
      },
      {
        name: 'Key Holder',
        discription:
          'Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality',
        price: 30,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Golden',
        category: 'home-decoration',
        thumbnail: 'https://i.dummyjson.com/data/products/30/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/30/1.jpg',
          'https://i.dummyjson.com/data/products/30/2.jpg',
          'https://i.dummyjson.com/data/products/30/3.jpg',
          'https://i.dummyjson.com/data/products/30/thumbnail.jpg',
        ],
      },
    ],
  }) */
  res.status(200).json({ name: 'hello' })
}

/*{
"products": [

],

} */

/*number 2 */
/*[
{
"id": 1,
"name": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
"price": 109.95,
"discription ": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
"category": "men's clothing",
"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
"rating": {
"rate": 3.9,
"count": 120
}
},
{
"id": 2,
"name": "Mens Casual Premium Slim Fit T-Shirts ",
"price": 22.3,
"discription ": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
"category": "men's clothing",
"image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
"rating": {
"rate": 4.1,
"count": 259
}
},
{
"id": 3,
"name": "Mens Cotton Jacket",
"price": 55.99,
"discription ": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
"category": "men's clothing",
"image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
"rating": {
"rate": 4.7,
"count": 500
}
},
{
"id": 4,
"name": "Mens Casual Slim Fit",
"price": 15.99,
"discription ": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product discription .",
"category": "men's clothing",
"image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
"rating": {
"rate": 2.1,
"count": 430
}
},
{
"id": 5,
"name": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
"price": 695,
"discription ": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
"category": "jewelery",
"image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
"rating": {
"rate": 4.6,
"count": 400
}
},
{
"id": 6,
"name": "Solid Gold Petite Micropave ",
"price": 168,
"discription ": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
"category": "jewelery",
"image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
"rating": {
"rate": 3.9,
"count": 70
}
},
{
"id": 7,
"name": "White Gold Plated Princess",
"price": 9.99,
"discription ": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
"category": "jewelery",
"image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
"rating": {
"rate": 3,
"count": 400
}
},
{
"id": 8,
"name": "Pierced Owl Rose Gold Plated Stainless Steel Double",
"price": 10.99,
"discription ": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
"category": "jewelery",
"image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
"rating": {
"rate": 1.9,
"count": 100
}
},
{
"id": 9,
"name": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
"price": 64,
"discription ": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
"category": "electronics",
"image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
"rating": {
"rate": 3.3,
"count": 203
}
},
{
"id": 10,
"name": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
"price": 109,
"discription ": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
"category": "electronics",
"image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
"rating": {
"rate": 2.9,
"count": 470
}
},
{
"id": 11,
"name": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
"price": 109,
"discription ": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
"category": "electronics",
"image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
"rating": {
"rate": 4.8,
"count": 319
}
},
{
"id": 12,
"name": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
"price": 114,
"discription ": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
"category": "electronics",
"image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
"rating": {
"rate": 4.8,
"count": 400
}
},
{
"id": 13,
"name": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
"price": 599,
"discription ": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
"category": "electronics",
"image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
"rating": {
"rate": 2.9,
"count": 250
}
},
{
"id": 14,
"name": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
"price": 999.99,
"discription ": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
"category": "electronics",
"image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
"rating": {
"rate": 2.2,
"count": 140
}
},
{
"id": 15,
"name": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
"price": 56.99,
"discription ": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
"category": "women's clothing",
"image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
"rating": {
"rate": 2.6,
"count": 235
}
},
{
"id": 16,
"name": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
"price": 29.95,
"discription ": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
"category": "women's clothing",
"image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
"rating": {
"rate": 2.9,
"count": 340
}
},
{
"id": 17,
"name": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
"price": 39.99,
"discription ": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
"category": "women's clothing",
"image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
"rating": {
"rate": 3.8,
"count": 679
}
},
{
"id": 18,
"name": "MBJ Women's Solid Short Sleeve Boat Neck V ",
"price": 9.85,
"discription ": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
"category": "women's clothing",
"image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
"rating": {
"rate": 4.7,
"count": 130
}
},
{
"id": 19,
"name": "Opna Women's Short Sleeve Moisture",
"price": 7.95,
"discription ": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
"category": "women's clothing",
"image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
"rating": {
"rate": 4.5,
"count": 146
}
},
{
"id": 20,
"name": "DANVOUY Womens T Shirt Casual Cotton Short",
"price": 12.99,
"discription ": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
"category": "women's clothing",
"image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
"rating": {
"rate": 3.6,
"count": 145
}
}
] */
