export default function Menu() {
    const dishes = [
        { id: 1, name: 'Pancakes', price: 10 },
        { id: 2, name: 'Waffles', price: 12 },
        { id: 3, name: 'Omelette', price: 11 },
        { id: 4, name: 'Salad', price: 8 },
        { id: 5, name: 'Pizza', price: 15 },
        { id: 6, name: 'Pasta', price: 13 },
        { id: 7, name: 'Burger', price: 14 },
        { id: 8, name: 'Sandwich', price: 9 },
        { id: 9, name: 'Tacos', price: 11 },
        { id: 10, name: 'Sushi', price: 16 }
    ]

    return (
        <ul>
            {dishes.map(dish => (
                <li key={dish.id}>
                    {dish.name} - ${dish.price}
                </li>
            ))}
        </ul>
    )
}
