const ProductData = [
    {
        id: 'item1',
        name: 'Adidas Crop Hoodie',
        img: 'https://images.unsplash.com/photo-1571755497619-a0ee0e54764e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        colors: ['#EACCC4', '#6BE58C', '#295FB4'],
        sizes: ['Small', 'Medium', 'Large'],
        price: '$24.99',
        description: 'Adidas crop hoodie is great for any occasion',
        saved: {
          value: true,
          color: '#EACCC4',
          size: 'Medium'
        },
        stores: ['store1']
    },
    {
        id: 'item2',
        name: 'Blue Blouse',
        img: 'https://images.unsplash.com/photo-1549220500-16dab6195201?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1601&q=80',
        colors: ['#EACCC4', '#6BE58C', '#295FB4'],
        sizes: ['Small', 'Medium', 'Large'],
        price: '$19.99',
        description: 'Blue striped blouse. Made with all natural materials.',
        saved: {
            value: true,
            color: '#295FB4',
            size: 'Medium'
        },
        stores: ['store1', 'store2']
    },
    {
        id: 'item3',
        name: 'Berry Look Floral Blouse',
        img: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
        colors: ['#EACCC4', '#fffff', '#295FB4'],
        sizes: ['Small', 'Medium', 'Large', 'X-Large'],
        price: '$17.99',
        description: 'The Floral blouse is perfect for summer',
        saved: {
          value: false,
          color: '',
          size: ''
        },
        stores: ['store2']
    },
    {
        id: 'item4',
        name: 'Floral Graphic Tee',
        img: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80',
        colors: ['#EACCC4', '#6BE58C', '#295FB4', '#E29EDF'],
        sizes: ['Small', 'Medium', 'Large', 'X-Large'],
        price: '$19.99',
        description: 'The Floral Graphic Tee features a crew neckline and a relaxed fit. Made with 100% cotton.',
        saved: {
            value: true,
            color: '#E29EDF',
            size: 'Small'
        },
        stores: ['store1', 'store2']
    },
    {
        id: 'item5',
        name: 'Berry Look Floral Dress',
        img: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1601&q=80',
        colors: ['#EACCC4', '#E82711', '#295FB4', '#E29EDF'],
        sizes: ['Small', 'Medium', 'Large', 'X-Large'],
        price: '$59.99',
        description: 'The Floral Dress features a relaxed fit and beautiful colors.',
        saved: {
            value: false,
            color: '',
            size: '',
        },
        stores: ['store1', 'store2', 'store3']
    },
    {
        id: 'item6',
        name: 'Grey Sweater',
        img: 'https://images.unsplash.com/photo-1571063965755-57673e818410?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
        colors: ['#939393'],
        sizes: ['Medium', 'Large', 'X-Large'],
        price: '$34.99',
        description: 'The perfect winter time sweater. Warm and form fitting.',
        saved: {
            value: false,
            color: '',
            size: '',
        },
        stores: ['store1', 'store2']
    },
    {
        id: 'item7',
        name: 'Ski Bum Sweater',
        img: 'https://images.unsplash.com/photo-1541629007334-1f6c44705182?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
        colors: ['#939393,#CCCCCC'],
        sizes: ['Medium', 'Large', 'X-Large'],
        price: '$34.99',
        description: 'High quality ski bum long sleeve winter sweater',
        saved: {
            value: false,
            color: '',
            size: '',
        },
        stores: ['store1']
    }
];

export default ProductData;