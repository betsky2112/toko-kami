import { Link } from 'react-router-dom';

import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  Container,
  SimpleGrid,
  Box,
} from '@mantine/core';
import classes from './ProductList.module.css';
import ProductSearch from './ProductSearch';
import useProducts from './hooks/useProducts';

export default function ProductList() {
  const { products } = useProducts();
  
  const renderProducts = () => 
    products &&
    products.length > 0 &&
    products.map((product) => (
      <Card key={product.id} withBorder radius="md" className={classes.card}>
        <Card.Section className={classes.imageSection}>
          <Image 
            src={product.images[0]}
            alt="Tesla Model S"
            w={'100%'}
            h={'100$'}
            fit="contain"
          />
        </Card.Section>

        <Group justify="space-between" mt="md">
          <div>
            <Text fw={500}>{product.title}</Text>
            <Text fz="xs" c="dimmed">
              Free recharge at any station
            </Text>
          </div>
          <Badge variant="outline">25% off</Badge>
        </Group>

        <Card.Section className={classes.section}>
          <Group gap={30} justify="space-between" px={15}>
            <div>
              <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                {product.price}
              </Text>
            </div>

            <Link to={`/products/${product.id}`}>
              <Button radius="xl" style={{ flex: 1 }}>
                Beli
              </Button>
            </Link>
          </Group>
        </Card.Section>
      </Card>
    ));

    return (
      <Container py="xl">
        <ProductSearch />
        <Box mb={15}>
          <Text>Tersedia {products.length} produk</Text>
        </Box>
        <SimpleGrid cols={{ base: 1, sm: 3 }}>
          {renderProducts()}
        </SimpleGrid>
      </Container>
    )
}
// const data = {
//   products: [
//     {
//       id: 1,
//       name: 'Product A',
//       description: 'A high-quality product with multiple features.',
//       price: 29.99,
//       image: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//       category: 'Electronics',
//       stock: 15,
//     },
//     {
//       id: 2,
//       name: 'Product B',
//       description: 'An elegant product that suits your style.',
//       price: 49.99,
//       image: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
//       category: 'Fashion',
//       stock: 8,
//     },
//     {
//       id: 3,
//       name: 'Product C',
//       description: 'A versatile product for your everyday needs.',
//       price: 19.99,
//       image: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
//       category: 'Home & Kitchen',
//       stock: 25,
//     },
//     {
//       id: 4,
//       name: 'Product D',
//       description: 'A powerful product designed for professionals.',
//       price: 99.99,
//       image: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
//       category: 'Electronics',
//       stock: 12,
//     },
//     {
//       id: 5,
//       name: 'Product E',
//       description: "A comfortable product that you'll love.",
//       price: 34.99,
//       image: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
//       category: 'Fashion',
//       stock: 5,
//     },
//   ],
// };

// function ProductList() {
//   return (
//     <div>
//       <h2>Product List</h2>
//       <ul>
//         {data.products.map((product) => (
//           <li key={product.id}>
//             <div>
//               <img src={product.image} alt={product.name} />
//             </div>
//             <div>
//               <Link to={`/products/${product.id}`}>
//                 <h3>{product.name}</h3>
//               </Link>
//               <p>{product.description}</p>
//               <p>Price: ${product.price}</p>
//               <p>Category: {product.category}</p>
//               <p>In Stock: {product.stock} units</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
