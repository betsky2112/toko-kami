import { Box, Input } from '@mantine/core';
import useProducts from './hooks/useProducts';

export default function ProductSearch() {
    const { search } = useProducts();

    const handleSearch = (e) => {
        const value = e.target.value;
        search(value);
    };

    return (
        <Box mb={15}>
            <Input size="lg" placeHolder="Cari produk" onChange={handleSearch} />
        </Box>
    );
}